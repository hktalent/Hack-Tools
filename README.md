build for https://github.com/hktalent/goSqlite_gorm
### The all-in-one Red Team browser extension for **Web Pentesters**

HackTools, is a web extension facilitating your **web application penetration tests**, it includes **cheat sheets** as well as all the **tools** used during a test such as XSS payloads, Reverse shells and much more.

With the extension you **no longer need to search for payloads in different websites** or in your local storage space, most of the tools are accessible in one click. HackTools is accessible either in **pop up mode** or in a whole tab in the **Devtools** part of the browser with F12.

### Current functions

- Dynamic Reverse Shell generator (PHP, Bash, Ruby, Python, Perl, Netcat)
- Shell Spawning (TTY Shell Spawning)
- MSF Venom Builder
- XSS Payloads
- Basic SQLi payloads
- Local file inclusion payloads (LFI)
- Data Encoding
- Obfuscated Files or Information
- Hash Generator (MD5, SHA1, SHA256, SHA512, SM3)
- Useful Linux commands (Port Forwarding, SUID)
- RSS Feed (Exploit DB, Cisco Security Advisories, CXSECURITY)
- CVE Search Engine
- Various method of data exfiltration and download from a remote machine

## Preview

<div align='center'>
  <img alt="preview_1" src="./src/assets/img/preview.gif?raw=true" />
</div>

<div align='center'>
  <img alt="preview_2" src="https://i.imgur.com/5HIr6a6.png" />
</div>

<div align='center'>
  <img alt="preview_3" src="https://i.imgur.com/Q6cXVBw.png" />
</div>

<div align='center'>
  <img alt="preview_4" src="https://i.imgur.com/ME6lyOU.png" />
</div>

<div align='center'>
  <img alt="preview_5" src="https://i.imgur.com/HQsboJW.png" />
</div>


# Install the extension
    
<h2> 
  <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/chromium.svg" alt="chromium_icon" title='Chromium' width="25" height="25" style="float:left;" />
  Chromium based browser
</h2>

You can download the **latest build** [here.](https://github.com/LasCC/Hack-Tools/releases)

Or, you can download the extension on the **chrome web store** [here.](https://chrome.google.com/webstore/detail/hack-tools/cmbndhnoonmghfofefkcccljbkdpamhi)

Otherwise, you can build the project yourself from the source code

<h2> 
  <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/firefox.svg" alt="firefox_icon" title='Firefox' width="25" height="25" style="float:left;" /> 
  Mozilla Firefox
</h2>

You can download **HackTools** on the Firefox browser add-ons [here.](https://addons.mozilla.org/en-US/firefox/addon/hacktools/)

<h2> 
  <img src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/safari.svg" alt="safari_icon" title='Safari' width="25" height="25" style="float:left;" /> 
  Instructions to build for Safari
</h2>

Create a safari web extension project using the command below. *This is to be run once.*

```bash
xcrun safari-web-extension-coverter [path_to_dist_folder]
```

Follow the instructions to create the project the default language should be Swift.

- Build project.
- Open Safari and enable unsigned extensions; Develop -> Allow Unsigned Extensions.
- Open Safari -> Preferences -> Extensions and enable Hack-Tools
- Click on the extension icon and switch to full screen mode.

*Instructions provided by [jayluxferro](https://github.com/LasCC/Hack-Tools/issues/88)*

### Build from source code

```bash
git clone https://github.com/LasCC/Hack-Tools.git
cd Hack-Tools
npm install && npm run build     # If you have installed yarn you can replace npm with yarn
```

Once the build is done correctly, webpack will create a new folder called **dist**

After that you need to go to the **extension** tab on your chrome based navigator and turn on the **developer mode**

<img alt="extension_tutorial" src="https://i.imgur.com/0GRfu2K.png" />

Then click on the **load unpacked** button in the top left corner

<img alt="extension_tutorial" src="https://i.imgur.com/q41GeAb.png" />

Once you clicked on the button you just need to select the **dist folder** and that's it ! 🎉

<img alt="extension_tutorial" src="https://i.imgur.com/mL4TVu0.png" />

## Authors

👤 <a href="http://github.com/LasCC" alt="Github_account_Ludovic_COULON">**Ludovic COULON**<a/> & <a href="http://github.com/rb-x" alt="Github_account_Riadh_BOUCHAHOUA">**Riadh BOUCHAHOUA**<a/>

## Show your support

You can give a ⭐️ if this project helped you !

Note that this project is maintained, developed and made available for **free**, you can offer us a coffee, it will be very **encouraging and greatly appreciated** 😊

<a href="https://www.paypal.me/hacktoolsEXT" target="_blank"><img src="https://paymentweek.com/wp-content/uploads/2014/09/paypal-copy-1024x489.png" alt="Paypal" style="height: 50px !important;width: auto !important"></a>
