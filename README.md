## React Native - testeng ze watres :boat:

Just following [the docs](https://facebook.github.io/react-native/docs/running-on-device) here on how to get this boat anchor named react onto a native device.

---
### Lessons Learned:

- The chgrp used for libvirtd is baloney. Permissions on /dev/kvm reset every
    time you reboot, so you need to add the user to /dev/kvm with `sudo usermod
    -a -G kvm <username>`. Kind bogus
- The android emulator isn't available in `adb devices` by default. You need to
    manually create the emulator by opening android studio, opening up your
    project (which is in the `/android` directory of your react-native app),
    and then click on `Run -> run` from within android studio. There will be
    prompts to create a virtual emulator (you'll run into kvm issues here if
    your permissions aren't correct), and you can download the latest API
    version of android (Pie at the time of writing, a cool ~800MB download, heh).

    <p align="center">
      <img src="https://raw.githubusercontent.com/ggodreau/rn_test/master/assets/kvm.png" width="350">
    </p>

    <p align="center">
      <img src="https://raw.githubusercontent.com/ggodreau/rn_test/master/assets/emu.png" width="350">
    </p>

    And finally, _while the emulator is running_ you should be able to see
    a new device in your `adb devices` output:

    <p align="center">
      <img src="https://raw.githubusercontent.com/ggodreau/rn_test/master/assets/adb.png" width="350">
    </p>

    You can then spool up the react app on the emulated device by (if you
    choose, explicitly) stating the device id, as such: ``react-native
    run-android --deviceID emulator-5554``. After which you'll get [this
    error](https://github.com/facebook/jest/issues/3254), which can be solved
    by entering this:

    ``echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p``

    A successful deploy

### Short term goalz:

- Get this thing running in a hello world capacity on an android device
  - Not using Expo CLI cause that's for brainlets
- See if we can handle simple touch interactions within react's state management
- Try to get all this wrapped into an .apk I can deploy onto the device, either automatically or via good ole capy peste

Woot! Got the hello world working. Looks like the $ANDROID_HOME env var
wasn't automatically detected by android studio so I had to manually put
it into `android/local.properties`. You need the full path, which is lame.
Did it via a USB cable connection to my laptop (no emulator in android
studio.) Here it is:

<p align="center">
  <img src="https://raw.githubusercontent.com/ggodreau/rn_test/master/assets/helloworld.jpg" width="350">
</p>

Next stop is to figure out how to do it over wifi so I don't drain my
battery.

Here's what a successful deploy over USB looks like:

```
[greg@13z rn_test]$ react-native run-android --deviceId 36ee79d1
Starting JS server...
Building the app...

> Configure project :app
WARNING: The specified Android SDK Build Tools version (28.0.2) is ignored, as it is below the minimum supported version (28.0.3) for Android Gradle Plugin 3.2.1.
Android SDK Build Tools 28.0.3 will be used.
To suppress this warning, remove "buildToolsVersion '28.0.2'" from your build.gradle file, as each version of the Android Gradle Plugin now has a default version of the build tools.

BUILD SUCCESSFUL in 14s
57 actionable tasks: 1 executed, 56 up-to-date
Running /home/greg/Android/Sdk/platform-tools/adb -s 36ee79d1 reverse tcp:8081 tcp:8081
Installing the app on the device (cd android && adb -s 36ee79d1 install app/build/outputs/apk/app-debug.apk
app/build/outputs/apk/app-debug.apk: 1...d. 2.9 MB/s (17009481 bytes in 5.504s)
Please select on your phone whether can install the app by The ADB command?
	pkg: /data/local/tmp/app-debug.apk
Success
Starting the app on 36ee79d1 (/home/greg/Android/Sdk/platform-tools/adb -s 36ee79d1 shell am start -n com.rn_test/com.rn_test.MainActivity)...
Starting: Intent { cmp=com.rn_test/.MainActivity }
```

### Long term goalz:

- See if we can use cordova or some other API to get access to device hardware like camera and gp-essay
- See if we can create a development .api and maybe provisioning profile to run this on a turd iOS device

### Stretch goalez:

- See what it'd take to get a cert in place and deployed onto googer store
- See what the monetization path would look like to actually generate something that might make me less poor one day
