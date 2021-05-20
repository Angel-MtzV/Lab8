import { TestScheduler } from "@jest/core";
import { pushToHistory } from '../scripts/router.js';

/**
 * @jest-environment jsdom
 */

describe("settings", () => {

    test('settings', () => {
        const histObject = pushToHistory('settings', 0);
        expect(histObject.length).toBe(2);
        expect(String(histObject.state)).toMatch(String({"page": "settings"}));
    });

    test('entries', () => {
        const histObject = pushToHistory('entry', 2);
        expect(histObject.length).toBe(3);
        expect(String(histObject.state)).toContain(String({"page": "entry2"}));
    });

    test('home page', () => {
        const histObject = pushToHistory('', 0);
        expect(histObject.length).toBe(4);
        expect(String(histObject.state)).toContain(String({}));
    });
});
