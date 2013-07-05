# Notes

## fetching own Username

```
div#lol-pvpnet-bar-account > span.welcome_text InnerHtml:

Welcome, NAME (
Willkommen, NAME (

"[a-A]+, ([...]+) ("
```

## adding avatar next to quick edit box

* `div#vB_Editor_QR` --> Parent --> add style `"float: left;"`

* `div#vB_Editor_QR` --> Parent --> prepend:
``` html
<div style="float: left;">
  <div style="padding-top: 20px; width: 205px; text-align: center;">
    <big style="display: block; font-size: 13px; font-weight: bold; padding-bottom: 5px; color: rgb(51, 51, 51);">
      FairyKevo
    </big>
    <a style="width: 145px; background: url(&quot;http://riot-web-static.s3.amazonaws.com/forum/ui/avatar.png&quot;) no-repeat scroll 0px 0px transparent; margin: 0px auto; position: relative; height: 100px; display: block;">
      <img style="width: 80px; height: 80px; margin: 7px 0px 0px;" src="http://img.lolking.net/shared/riot/images/profile_icons/profileIcon26.jpg">
      <span style="left: 6px; font-size: 11px; font-weight: bold; color: white; line-height: 20px; text-align: center; position: absolute; bottom: 17px; height: 20px; width: 20px; display: block;">
        30
      </span>
      <span style="bottom: 17px; height: 20px; width: 20px; position: absolute; display: block; right: 4px;">
      <img src="http://riot-web-static.s3.amazonaws.com/forum/ui/avatar_right_orb_blue.png"></span>
    </a>
  </div>
</div>
```

* `div#vB_Editor_QR` --> Parent --> append:
``` html
<div style="clear: both;"></div>
```