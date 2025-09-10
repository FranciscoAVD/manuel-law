# Editing Website Content

The following are instructions on how, with the least amount of pain, to edit the
text on your website. This is not a guide meant to show you how to _style_ the text.
The purpose is to show you how to change what your text _says_.

## Folder Structure

```
manuel-law
    src/
        .
        .
        .
        lib/
            dictionaries/
                en.json //ENGLISH TEXT
                es.json //SPANISH TEXT
```

These are the only files you will need to visit.

## JSON Structure

The object inside your `en.json` and `es.json` have the following shape

```
{
    pages: {...},
    layout: {...}
}
```

### Pages

Pages has the main content for each of the pages:

- Home
- Services
- Team

### Layout

Layout has the content which is shared between pages:

- Header
- Footer

## Editing

I recommend you find the text on the website and then `CTRL+F` inside the file to search
for the text. Be sure _NOT_ to change the structure of the JSON objects. It is crucial to
only change the _RIGHT_ side of the properties.
<br/>
For example

```
"hero": {
        "title": ["Justice.", "Strategy.", "Affordability."],
        "description": "At Manuel Alejandro Law Firm, we are committed to delivering practical, tactical, and affordable legal representation tailored to your needs.",
        "button": {
          "label": "Schedule a Free Consultation",
          "href": "/en#contact"
        }
      }
```

This is the structure of the "Hero" section of the English version of the Home page. If
you wanted to change the title of the section to "Happy. Go. Lucky." and the description to
"Tu caco favorito pew pew", you would update the file like so

```
"hero": {
        "title": ["Happy.", "Go.", "Lucky."],
        "description": "Tu caco favorito pew pew",
        "button": {
          "label": "Schedule a Free Consultation",
          "href": "/en#contact"
        }
      },
```

It is _VERY_ important never to touch the fields labeled `"href"`. These fields control the
routing of the website. Any changes will cause broken links.
