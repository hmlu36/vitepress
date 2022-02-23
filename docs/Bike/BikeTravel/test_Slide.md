---
title: "測試投影片"
date: 2018-03-02T15:15:34+08:00
---  

class: center, middle, inverse

# 測試PPT
# -
## remark-twemoji
[https://github.com/eueung/hugo-remark-twemoji](https://github.com/eueung/hugo-remark-twemoji)
---

TEST slide2  
- Test content1  
- Test content2  

???
user for represent
---
TEST slice3
---
name: agenda
class: middle, center
# Agenda
The name of this slide is {{ name }}.
---
.left-column[
  ## Markdown extensions
  ### - Slide properties
]
.right-column[
Initial lines containing key-value pairs are extracted as slide properties:

```remark
name: agenda
class: middle, center

# Agenda

The name of this slide is {{ name }}.
```

Slide properties serve multiple purposes:

* Naming and styling slides using properties `name` and `class`

* Using slides as templates using properties `template` and `layout`

* Expansion of `{{ property }}` expressions to property values

See the [complete list](https://github.com/gnab/remark/wiki/Markdown#slide-properties) of slide properties.
]
---
class: center, middle, inverse

## Of course, Markdown can only go so far.

---
layout: false
.left-column[
  ## What is it?
]
.right-column[
  A simple, in-browser, Markdown-driven slideshow tool targeted at people who know their way around HTML and CSS, featuring:

- Markdown formatting, with smart extensions

- Presenter mode, with cloned slideshow view

- Syntax highlighting, supporting a range of languages

- Slide scaling, thus similar appearance on all devices / resolutions .red[*]

- Touch support for smart phones and pads, i.e. swipe to navigate slides

.footnote[.red[*] At least browsers try their best]
]
---
