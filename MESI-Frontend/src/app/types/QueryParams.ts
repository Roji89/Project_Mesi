import { Params } from "@angular/router";

export type QueryParams  = Params & {
    q: string;
}