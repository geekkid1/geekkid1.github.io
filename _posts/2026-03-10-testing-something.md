---
layout: post
title: testing something
date: 2026-03-10 18:18:00
description: I am testing a feature I am trying to enable on my website
tags: testing
categories: test
featured: false
---

<style>
    [data-theme="dark"] .light-only {
        display: none; !important
    }
    [data-theme="light"] .dark-only {
        display: none; !important
    }
</style>

I am testing a feature that is dependent on some CSS that I have put into this page. Time to see if it works!

<div class="dark-only">This text should only be visible when dark mode is on.</div>

<div class="light-only">This text should only be visible when light mode is on.</div>

This is some text that is below both of the conditional sets.

To test this out more, check out the images below!

<div class="row justify-content-sm-center dark-only">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/stacks/d_2yr.png" title="example image" class="img-fluid rounded" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/stacks/d_2026_Q1.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

<div class="row justify-content-sm-center light-only">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/stacks/l_2yr.png" title="example image" class="img-fluid rounded" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/stacks/l_2026_Q1.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>