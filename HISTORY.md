Repository Version History
==========================
### Goals:
- [ ] Mark nonexistent summoners
- [ ] Insert summoner icon when quick-replying
- [x] Automatic update notifications
- [ ] Show server status

---

# Newest Version:
## 0.1.1
- new occurred bug from 0.1.0 fixed.

## 0.1.0
- Updated working as intended
- fixed the bug in v0.0.3, which tried to run the script before the needed summonernames where loaded

## 0.0.3
- Quick reply box changed
	- now appears full width
	- only vertical scrollable to avoid those ugly effects
- now starts directly with site-load, instead of waiting for the page to load

## 0.0.2
- mainly cleanup
- greasemonkey metadata added
	- should update automatically now
	- runs at page start now
	- loads (and caches) `jQuery v2.0.1`
- basis for clientside level 1 caching with cookies done ( `getCookie(...)` / `setCookie(...)` )
- Summoner Images added for later use


## 0.0.1
- Initial version