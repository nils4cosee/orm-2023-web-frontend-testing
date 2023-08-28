import '@testing-library/jest-dom/vitest'
import "./vendor/tacit-css.min.css"
import {afterEach} from "vitest";
import {cleanup} from "@testing-library/vue";

afterEach(() => {
    cleanup()
})
