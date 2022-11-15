import { EventEmitter } from "events";

const globalEmitter: EventEmitter = new EventEmitter();

export { globalEmitter };