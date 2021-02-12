<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at https://mozilla.org/MPL/2.0/. -->

# Ideas 💡

* Make a polling application where I can do any poll from the ones with candidates to those with yes/no questions, integrated with plugins for each different API. I'll try to do something with React or Vue. I'll see.
* Each election/poll has:
  * **Name**
  * **Type**
    * **Election** (where we have people as choices and a limited amount of voters)
    * **Yes/No**
    * **General poll**
  * **Percentage of counted votes** *(in case of elections only)*.
  * **Overrides** (where the user can change any data for any option for practical purposes, as changing images/names to be different/better than the ones provided by the API).
  * **Associated plugin** (the one used to get the votes from an API)
  * **Map Flag** (if this election/poll has any type of map to work with, to see how each region of it is voting, for example) *(Boolean value)*
    * **Map Properties** (here will come all information needed to have a map in the application) *(still to be seen)*
  * **Options/Candidates**. Each one has:
    * **Name/Identifier**
    * **Number of votes**
    * **Status** (elected or not) *(in case of elections only)*
    * **Color** (may be used as color of party to be displayed in the application itself, yes/no will be default to green/red and general polls will have random colors).
* The UI will be based on TV's already consolidated vote counting panels and interactive screens. Examples of those can be seen at https://pin.it/4CGEvnP .