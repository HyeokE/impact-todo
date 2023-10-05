import {HomeStackType} from "./Stack/HomeStack";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends HomeStackType {}
    }
}