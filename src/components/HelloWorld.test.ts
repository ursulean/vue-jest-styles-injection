import { describe, it, expect } from "vitest";
import { render } from 'vitest-browser-vue'
import HelloWorld from './HelloWorld.vue';
import { page } from '@vitest/browser/context'

describe('HelloWorld.vue', () => {
  it('takes a screenshot with hello world', async () => {
    render(HelloWorld, { props: { msg: "Hello, world!" } });
    expect(document.documentElement.outerHTML).toContain("style")
    const { path, base64 } = await page.screenshot({base64: true})
    console.log({ path, base64 });
  });
});
