---
layout: default
permalink: /blog
permalink_name: /blog
title: blog
---

# Posts

<ul>
{%for item in site.posts%}
    <li>
    {%- if item.url -%}
      <a href="{{ item.url }}">{{ item.title }}</a>
    {%- else -%}
      {{ item.title }}
    {%- endif -%}
    </li>
{%endfor%}
</ul>