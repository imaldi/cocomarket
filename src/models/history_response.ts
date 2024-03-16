// To parse this data:
//
//   import { Convert, HistoryResponse } from "./file";
//
//   const historyResponse = Convert.toHistoryResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { Item } from '../models/history_list_response';

export interface HistoryResponse {
    message: string;
    status:  boolean;
    data:    Item;
}

