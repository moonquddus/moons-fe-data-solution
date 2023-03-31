### Welcome!

Hope you enjoy my solution! I've left the old readme in `INSTRUCTIONS.md` if you want to spin it up.

### Notes

- I actually encountered an issue running this. Hot reload for webpack wasn't working, and I found out it's a Windows issue. Added `WATCHPACK_POLLING=true` to the start script to make it work. If I had time, I would have ripped it out entirely and replaced it with Vite haha
- Went for a classical dashboard look for the solution, looks a bit basic but it does the job
- For the graph, I went for `chart.js`. I actually built something very similar at my previous role, and our first choice was `chart.js` because of how quickly you can prototype something. It has its flaws though, namely responsiveness was _very_ wonky for me, kinda disappointing. And adding a comment icon on top of each bar was exceedingly difficult. I found a better solution than what I did, it was just so hard to find because of documentation - quite surprising considering how popular it is, but it might have been because I was using the react wrapper.
- I went for a Notion-like comments box. You know when click on a block, and a comments box pops out on the right? Yeah, that. Think it works pretty well
- The "Generate share link" experience is a bit ugly if I'm honest, but I didn't want to spend _too_ much time on making everything pretty
- I went for good ol' vanilla CSS. It's suuuper underrated, and it's very mature these days! That being said, I would probably use PostCSS - add some scaffolding to support extra browsers, and a nesting plugin (I have realised that no nesting + BEM does not make for a pleasant experience)
- If I was building this to be prod-ready, I would have used a component library, and possibly Tailwind as well. It's important for an early startup to be able to ship something fast while still being high quality
- I actually decided not to create any custom global state in redux at all! I relied entirely on RTK's api middleware to handle api calls, and cache/refetch everything. It's really wonderful to use, and the team at redux have done such a great job in creating powerful tools that require less lines of code (manually setting up redux stores, thunks/saga, axios, etc is such a pain)
- I have a rough component structure in place, but for larger-scale apps I guess I would seperate by domain as well
- I was relatively thorough with the tests. I put a lot of integration tests in place - one of my beliefs is that integration tests provide the greatest documentation on a component, not comments. In theory, it should explain the entire business logic of a component
- That being said... there were so many places I could have done more. I missed out a lot of edge cases, and I could have arguably made more unit tests (deep object comparison instead of snapshots), as well as some cool functional tests in cypress if we wanted to. But again, I didn't want to go overkill on a tech test
- Oh and please excuse the messy commits hahaha. I like to use conventional commits in a professional environment, works well with release bots generating a changelog

### Improvements

- A bit more defensive rendering would be useful, as there's a lot that depends on API responses (so loading messages, error messages etc)
- Wasn't sure whether to show comments or not in the shared chart. Yeah, the comments will be useful for adding context, but it might contain sensitive information. Guess it's something I would have discussed
- Some auth work would have been cool, I don't mind writing some BE code for it
- As mentioned, probably would have used a component library and some styling framework to make this look fancier, quicker
- A share modal where you can generate the link and auto-copy to clipboard would have been sweet
- Possibly better responsiveness in general? Viewing charts in mobile is always a big problem (but solveable! With mobile gestures such as pinch zooming and swiping)
- e2e and functional tests would have been cool as well
- FE & BE models are very tightly coupled right now. A frontend application should theoretically be able to absorb and transform data from any generic BE service. In the future, I would have created a monolithic `Chart` model that included both the data points, and had an `comments` field as well. This model fits what FE is trying to achieve better. And probably would have kept it in a `chart-store` with redux
- The act of commenting is at heart, a collaborative experience. I know RTK's api middleware has lots of handy features for frequently fetching new data (eg polling) and we can use websockets to keep a live connection if we wanted to.

### Let's chat!

We can always wait for interviews, but if you have questions about my submission, or if something isn't quite right and you want to run it through me, feel free to reach out! My contact details are on my profile 🙌
