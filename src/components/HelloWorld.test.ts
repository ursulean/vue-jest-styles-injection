import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {

  it('takes a screenshot with hello world', async () => {
    mount(HelloWorld, { props: { msg: "Hello, world!" }, attachTo: document.body });
    expect(document.documentElement.outerHTML).toContain("style")
  });
});
