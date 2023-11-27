import { CommitOptions, createStore, Store as VuexStore } from "vuex";

import { state, StateType } from "@/store/state";
import { Getters, getters } from "@/store/getters";
import { Mutations, mutations } from "@/store/mutations";

export const store = createStore({
    state,
    getters,
    mutations,
});

export type Store = Omit<VuexStore<StateType>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}

export function useStore() {
    return store as Store;
}