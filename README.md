# Danger Dashboard
> A Firefox add-on

You've been messing with `about:config` and `dom.webcomponents.enabled` but you don't remember it anymore. Suddenly you visit a website that uses Web Components and nothing works the way you expect it-you need HELP!

This add-on renders a little dashboard on the bottom right corner on each page load, displaying the available support for each of the four APIs that are used to build Web Components: Custom elements, Shadow DOM, HTML templates and HTML Imports:

![Screenshot](_images/screenshot.png)

## Using

The add-on will run and detect features on each page load. When features are available natively, they will have a little 'N' to their left. Polyfilled features will have a 'P'. Finally, unavailable features will have an 'X'.

You can toggle the `dom.webcomponents.enabled` Firefox preference by clicking the checkbox on the dashboard. You will need to manually reload the page for the page and the dashboard to pick the new values.

## Configuring

Currently there is nothing that can be configured.

## Contributing

I am not an expert on writing Firefox add-ons---in fact, this is *the first add-on* I ever write. So there *will* be rough edges here, for which I apologise.

You can help to make it better by using it and [reporting errors and weirdnesses](https://github.com/sole/danger-dashboard/issues/new), and you can make it better *faster* by contributing code that fixes [existing issues](https://github.com/sole/danger-dashboard/issues).

If you want to help fix an specific issue but are not entirely familiar with code, that's OK too! Add a comment to the issue you're interested in, and we'll take it from there.

## License

© 2014 Soledad Penadés, licensed under the Apache 2.0 License.
