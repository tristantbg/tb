<?php if(!defined('KIRBY')) exit ?>

title: Website
pages: true
files: true
fields:
  prevnext: prevnext
  title:
    label: Title
    type:  text
    width: 1/2
  date:
    label: Date
    type:  date
    format: YYYY
    width: 1/2
  text:
    label: Text for SEO
    type:  textarea
  link:
    label: Link
    type: url
  videofile:
    label: Video
    type: select
    options: files
    width: 1/2
  featured:
    label: Image
    type: image
    width: 1/2
  dev:
    label: Development ?
    type: toggle
    width: 1/2
  credits:
    label: Credits
    type: structure
    style: table
    width: 1/2
    fields:
      creditTitle:
        label: Title
        type: text
        required: true
      creditName:
        label: Name
        type: text
      creditLink:
        label: Link
        type: url