# BassoonTracker Desktop

Electron fork of browser-based old-school Amiga Music Tracker in plain old JavaScript.
It is a stripped down version of the original.


![BassoonTracker](./skin/bassoontracker_main.png?raw=true)

Plays and edits Amiga Module files and FastTracker 2 XM files.  

If you have ever heard of [Protracker](https://en.wikipedia.org/wiki/Protracker) or [Fasttracker](https://en.wikipedia.org/wiki/FastTracker_2), then you know the drill,   
if not, then you are probably too young :-)

![BassoonTracker](./skin/bassoontracker_sampleeditor.png?raw=true)

**Features**
- Load, play, edit and save Protracker and FastTracker 2 compatible module files  
- All Protracker audio effects are supported (99% accurate, in case of historical differences in playback engines, I tend to follow the Protracker 2.X one)
  - Portamento / Frequency slides (Effect 1, 2, 3, 5, E1 and E2)
  - Vibrato (effect 4, 6, and E4)
  - Tremolo (effect 7 and E7)
  - Arpeggio (effect 0)
  - Glissando (effect E3)
  - Sample offsets (effect 9)
  - Volume slides and settings (effect A, C, E10, and E11)
  - Position jumps (effect B)
  - Pattern breaks, loops and delays (effect D, E6, and E14)
  - Speed settings (effect F)
  - Sample Delay, Cut, Retrigger and Finetune (effect E13, E12, E9, and E5)
  - Lowpass/LED filter (effect E0)
- Almost all FastTracker audio effects are supported (97% accurate)
  - Volume and Panning Envelopes
  - Auto Vibrato
  - Multiple samples per instrument
  - Extended volume commands
- Next to the tracker effects, there are per-channel effects for low, mid, high frequency, panning and reverb control
- Mute/solo tracks  
- Edit pattern data and sample properties, use ranges and cut/copy/paste for quick editing
- Midi support (only Midi-in currently)  
- Up to 32 channels 
- Import 8bit WAV, 8SVX and RAW samples (as well as any other format [AudioContext](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) can read, like .mp3 and .ogg)
- Integrated sample editor: Edit and slice your samples right inside BassoonTracker
- Full Undo/Redo in pattern editor and sample editor
- Export to .mod, .xm, .wav, and .mp3
- Connect your Dropbox account to directly read and write your own files
- Read more in [The Docs](https://www.stef.be/bassoontracker/docs/)

The playback engine has gone through extensive compatibility testing, but as the Protracker code itself is somewhat messy and muddy
throughout different versions, there's always room for improvement.
If you find a module that doesn't sound the way it should, let me know!
There are still some very specific [Protracker 1 and 2 playback quirks](http://www.stef.be/bassoontracker/docs/trackerQuircks.txt) that are not implemented (and probably never will as they are too bat-shit-crazy)
 
Note: if you use an AZERTY, QWERTZ or DVORAK keyboard, you can set that option in the settings to have the correct layout when playing notes on your computer keyboard.

**How to Build**  
  - The build step is **optional**, there are no runtime dependencies (*bliss!*)
  - Just open dev.html in a browser to load the plain uncompressed scripts 
  - To build the packaged version:
    - If you don't have grunt installed - install it with "npm install -g grunt-cli" 
    - Run "npm i" to install the Grunt build tools.
    - Use "grunt" to build the compressed files -> index.html will be created.
    - Use "grunt sprites" to build the spritesheet.
	  This will compact all files in the "skin/src" to a single .png file and will create a spritemap.
	- Use "grunt player" to build the player-only version (you can find it the "player" directory).
	- Use "grunt friend" to build the version for Friend OS (you can find it the "hosts/FriendOs/build" directory)


