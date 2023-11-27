<template>
    <div class="mb-5">
        <label :for="id ? id : name" class="text-sm text-gray-500">{{ props.text }}</label>
        <div class="relative flex focus-within:text-purple-500">
            <input type="" class="text-gray-400">
            <i class="absolute right-2">ICON</i>
        </div>


    </div>
</template>

<script setup lang="ts">

// PROPS
import { computed, ref, watch } from 'vue';
import * as validators from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'


const props = defineProps({
    type: {
        type: String,
        default: () => 'text'
    },
    text: {
        type: String
    },
    icon: {
        type: String
    },
    placeholder: {
        type: String
    },
    autocomplete: {
        type: String,
        default: () => 'on'
    },
    name: {
        type: String,
        default: () => ''
    },
    id: {
        type: String
    },
    /**
     * validation rules. example: email|required|minLength:10
     */
    rules: {
        default: () => '',
    },
    /**
     * vue 3 standard for value used in v-model value
     */
    modelValue: {},
    /**
     * Holds the errors, from the backed and emits the $v.invalid value
     */
    formError: {
        type: Object,
        default: () => { }
    },
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'input', 'update:formError'])

const content = ref()
/**
 * handleInput
 */
const handleInput = (e: any) => {
    emit('update:modelValue', e.target?.value);
    emit('input', e.target?.value);
};

watch(() => props.modelValue, (value) => {
    content.value = value
})

/**
 * setup vue validate
 */
/**
 * setup validation rules
 */
const RuleContent: any = {};
// split the string into an array
const parseRules: Array<string> = props.rules?.split('|');
// add each rule to the RuleContent
parseRules.forEach((rule: string) => {
    if (rule !== '') {
        if (rule.includes(':')) {
            const MethodRule = rule.split(':');
            // @ts-ignore
            RuleContent[MethodRule[0]] = validators[MethodRule[0]](MethodRule[1]);
        } else {
            // @ts-ignore
            RuleContent[rule] = validators[rule];
        }
    }
});

/**
 * computed
 * @type {ComputedRef<{content: {}}>}
 */
const rules = computed(() => ({
    content: RuleContent,
}));
/**
 * vueValidate
 */
const v$ = useVuelidate(rules, { content });

/**
 * checks if any field is invalid
 * @param errors
 * @return {boolean}
 */
const anyInvalid = (errors: any) => {
    let result = false;
    Object.keys(errors).forEach((eKey) => {
        if (errors[eKey]) {
            result = true;
        }
    });
    return result;
};

/**
 * watch vueValidate
 */
watch(v$, (value) => {
    const formError = props.formError;
    // the form error object must be passed
    if (formError !== undefined) {
        // create the object if does not exist
        formError.$invalid = formError?.$invalid ? formError.$invalid : {};
        formError.$invalid[props.name] = value?.$invalid;
        // check if any field is invalid
        formError.$anyInvalid = anyInvalid(formError.$invalid);
        emit('update:formError', formError);
    }
}, { deep: true, immediate: true });




</script>

<style scoped></style>