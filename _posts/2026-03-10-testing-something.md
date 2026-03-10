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