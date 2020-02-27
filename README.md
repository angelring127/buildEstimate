<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>


## Laravel with react

```bash
php artisan preset react
npm install
```



## **Laravel Mix, Live Reloading Steps**

1. Go to **webpack.mix.js** and add:

```js
mix.browserSync('localhost:8000');
//Add your own php artisan serve's url and port
//For me url is localhost or 127.0.0.1 and port is 8000
```



2. Run on **VSCode** or **Command Prompt**:

```
npm run watch
```

This command will automatically install the dependencies needed for **browserSync** function.

3. run **php artisan serve** and then re-run **npm run watch**:

Open in first **Command Prompt**:

```
php artisan serve
```

Open in second **Command Prompt**:

```
npm run watch
```

# **And that’s it, your React-Laravel Live Reloading is completed.**

------

# **React — Laravel Linking Step**

This part is about linking React to Laravel.

First, open /**resources/views/welcome.blade.php** and replace with this:

```
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Laravel</title>
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
  </head>
  <body>
    <div id="example"></div>
  <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
```

That code is the same as Laravel’s default welcome.blade.php, I only **replace** the style with app.js style and **delete its body** to match with React index.html.

**And you are done.**