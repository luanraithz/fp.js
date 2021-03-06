requirejs.config({
  paths: {
    ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
  },
});

require([
    'ramda',
    'jquery',
  ],
  function(_, $) {

    const Impure = { 
      getJSON: _.curry((callback, url) => {
        $.getJSON(url, callback);
      }),
    
      setHtml: _.curry((sel, html) => {
        $(sel).html(html)
      })
    }
    const url = term => `https://api.flickr.com/services/feeds/photos_public.gne?tags=${term}&format=json&jsoncallback=?`;
    
    // const app = _.compose(Impure.getJSON(trace('response')), url);

    const mediaUrl = _.compose(_.prop('m'), _.prop('media'))

    const img = src => $('<img />', { src });

    const images = _.compose(_.map(_.compose(img, mediaUrl), _.prop('items')));

    const renderImages = _.compose(Impure.setHtml('body'), images);

    const app = _.compose(Impure.getJSON(renderImages), url);

    app('cats');
});


