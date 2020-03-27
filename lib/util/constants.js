"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Prefix for SS58-encoded addresses on Kusama.
 */
exports.KUSAMA_SS58_FORMAT = 2;
/**
 * Prefix for SS58-encoded addresses on Polkadot.
 */
exports.POLKADOT_SS58_FORMAT = 0;
/**
 * Prefix for SS58-encoded addresses on Westend.
 * Also the default for Substrate-based chains.
 */
exports.WESTEND_SS58_FORMAT = 42;
/**
 * Latest extrinsic version.
 */
exports.EXTRINSIC_VERSION = 4;
// Useful constants for calculting an Era.
/**
 * @ignore
 */
exports.BLOCKTIME = 6; // in s
/**
 * @ignore
 */
exports.ONE_SECOND = 1 / exports.BLOCKTIME;
