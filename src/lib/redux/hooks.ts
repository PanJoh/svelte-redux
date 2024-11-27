import { getContext } from "svelte";
import { type Action, type Dispatch, type Store, type UnknownAction } from "redux";
import type { Readable, Subscriber } from "svelte/store";

export const ReduxContext = Symbol('redux-context');

export function useSelect<S, V>(selector: (state: S) => V): Readable<V> {
    const store = getContext<Store<S>>(ReduxContext);
    return {
        subscribe: (run: Subscriber<V>) => {
            run(selector(store.getState()));
            return store.subscribe(() => {
                run(selector(store.getState()));
            });
        },
    };
}

export function useDispatch<A extends Action = UnknownAction>() {
    const store = getContext<Store>(ReduxContext);
    return <T extends A>(action: T, ...extraArgs: any[]) => {
        return store.dispatch(action, ...extraArgs);
    };
}
