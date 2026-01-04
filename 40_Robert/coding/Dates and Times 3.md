Labeling instants, and measuring the intervals between them.

#### 1. Tracking Time Using the Sun

For millennia, timekeeping was synonymous with Earth's rotation.

The most intuitive measure of time is the position of the Sun in the Sky. **Apparent Solar Time** is "what the sundial reads". Noon is defined as the instant the Sun crosses the local meridian (this highest point in the sky). 

A **Sidereal Day** is the time it takes for Earth to rotate exactly $360^\circ$ about its axis. This is measured relative to distant stars. Since the Earth is also rotating around the sun, the Earth must rotate slightly **more than** $360^\circ$ before the sun is directly overhead again. The time it takes before the Sun to appear in the same position is called the **Solar Day**.

> This is also explained nicely in this video: https://youtu.be/FUHkTs-Ipfg?t=692

However, because the Earth orbits the sun in an ellipse (moving faster when closer to the Sun) and because Earth's axis is tilted, the length of an **(Apparent) Solar Day** varies throughout the year by up to half a minute.

I an attempt to solve the irregularity of apparent solar time scientists created a hypothetical **Mean Sun** that moves moves along the equator at a constant rate that matches the real Sun's average rate over the year. The **Mean Solar Time** is then the time based on the position of the Mean Sun.  

Ancient Egyptians counted using Base-12, using the thumb as a pointer. They divided the day and night into 12 segments. Giving 24 **hours** in a day. Base-12 was preferable over Base-10 as it was divisible by 2,3,4, and 6. 

The Babylons liked Base-60 for a similar reason, as it is the smallest number divisible by 2,3,4,5, and 6. Further dividing the hours into 60 **minutes** per hour and 60 **seconds** per minute. 

#### 2. Tracking the Time Reliably

These units of time are derived from astronomy, which are unstable. 

The duration of an earth rotation, and a lunar cycle are both increasing as a consequence of the moon dragging on the oceans (tidal friction). The solar orbits are relatively stable, but still fluctuate due to the gravitational pull of other planets (Jupiter/Saturn) and the "wobble" of Earth's axis (precession).

If the second were to be defined as a fraction of a day, and the day keeps getting longer, then the "second" itself changes in length. This is unacceptable for modern physics and GPS.

To solve this, scientists defined the **SI Second** as the new base unit of time in 1967. It is defined as follows:

> The second is the duration of $9,192,631,770$ periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium 133 atom.
> 
> Reference: https://www.bipm.org/en/committees/cg/cgpm/13-1967/resolution-1

This gave us a new definition that was close to the original second, but precise, constant, and independent of astronomical cycles. 

#### 3. The Perception of Time

An **Instant** is a specific point on the time axis with zero duration. It is a "freeze-frame" of the universe. A state of reality independent of the label we assign it.

**Absolute Time**, originally popularized by Isaac Newton, is the concept that time passes at a constant, universal rate for everyone, everywhere in the universe, regardless of their speed or position. This was disproved by Albert Einstein's Theory of Relativity, showing time is relative.

**Proper Time** the time measured by a clock following a specific object's path through spacetime. Due to time dilation, a clock moving at high speeds, or placed in a strong gravitational field will tick slower compared to a stationary clock far from gravity. 

#### 4. Timescales

This is where the collision between the SI Second (also called Atomic Second) and the Solar Day creates complexity. We currently maintain three major timescales.

**TAI (International Atomic Time)** is the foundation of modern timekeeping. It is a weighted average of over 400 atomic clocks in over 50 national laboratories worldwide. It runs continuously and never stops or steps back. TAI is purely a count of SI seconds.

**UT1 (Universal Time)** is the modern successor to Mean Solar Time. It is defined by the Earth's rotation and is determined by observing distinct quasars (distant celestial objects) using Very Long Baseline Interferometry (VLBI). If the Earth slows down, UT1 slows down. It ensures that noon remains firmly tied to the sun's position overhead.

**UTC (Coordinated Universal Time)** forms the compromise that governs our civil lives. It ticks at the exact same rate as TAI (using SI seconds), but it is managed to remain within 0.9 seconds of Earth’s rotation (UT1). To maintain this alignment, the **IERS** (International Earth Rotation and Reference Systems Service) monitors the drift. Whenever the difference approaches the 0.9 second threshold, they order a **Leap Second** allowing UT1 to catch up with UTC. 

>![[Pasted image 20251230173629.png]] 
>The difference UT1-TAI (blue) and UTC-TAI (red) from 1958 to the present. The time steps in UTC are the leap second adjustments. The positive leap second is an extra second that is inserted into the UTC time scale, which slows its advance relative to UT1. The yellow line shows the evolution of UT1-TAI that would result from a rate of −1.0 s y⁻¹, which was typical for the 13 years following 1972.
>
>Reference: Levine, Judah. (2024). [A proposal to change the leap-second adjustments to coordinated universal time. Metrologia. 61. 10.1088/1681-7575/ad6266](https://www.researchgate.net/publication/382230156_A_proposal_to_change_the_leap-second_adjustments_to_coordinated_universal_time). 

Leap years follow a fixed schedule, but these leap seconds do not. Requiring us to listen for updates from IERS. Global meteorologists voted in 2022 to stop adding leap seconds by 2035, deciding that the software bugs are worse than the time drift. Instead the intention is to let the offset grow for a century, and doing a larger correction (like a leap minute) in the distant future.

#### 5. The Gregorian Calendar (Going from Days to a Date)

While atomic clocks count seconds, humans think in terms of years, months, and days. The bridge between the two is the calendar.

Our current year counting system was devised by a monk named Dionysius Exiguus in the year 525. He calculated the years since the incarnation of Jesus, labeling the ensuing years as AD (Anno Domini, "In the year of the Lord"). The preceding years became labeled using BC (Before Christ). 

However, the number Zero did not exist in European numerals at the time. Consequently, the traditional calendar jumps directly from $1 \text{ BC}$ to $\text{AD } 1$. To correct for this in modern computing and astronomy, we use Astronomical Year Numbering, inserting a mathematical year zero:
- $\text{AD } 1 \rightarrow \text{Year } 1$
- $1 \text{ BC} \rightarrow \text{Year } 0$
- $2 \text{ BC} \rightarrow \text{Year } -1$

A next issue was to fit the days in a year. A solar year is approximately **365.24219 days** long. If we strictly adhered to a 365-day calendar, the seasons would drift by about 24 days every century. To align the calendar with the Earth's orbit, the Gregorian Calendar (introduced in 1582) applies a specific algorithm to add "Leap Days":

1. If the year is divisible by 4 it is a leap year (adds one day)
	- This gives a year length of $365.25$ days.
2. However, if the year is divisible by 100 it is NOT a leap year
	- This gives a year length of $365.24$ days.
3. Unless, the year is divisible by 400, in which case it IS a leap year.
	- This gives a year length of $365.2425$ days.

Then the question remained how to divide the days of the year into months. Again the values dont align. A lunar cycle, is approximately $29.53$ days. Therefore 12 lunar cycles dont fit perfectly into a year requiring a compromise.

The early roman calendar only has 10 months (Martius through December), compromising of 304 days. The remaining ~61 days were simply uncounted, being deemed a "monthless" period of waiting for spring. To close the gap, the months January and February were added to the beginning of the year, explaining why the etymologically numbered months are offset by two.

In $45 \text{ BC}$, Julius Caesar detached the months from the moon entirely. He distributed the extra days needed to match the solar year ($365$ days) across the 12 months, creating the arbitrary oscillating pattern of 30 and 31 days (with February taking the loss at 28).

#### 6. Timezones

While an instant happens at a single moment in the universe, the label we apply to it depends on where we are standing on Earth. Because the Earth is a rotating sphere, **Solar Noon** happens at a different time of day (UTC) for every degree of longitude. To fix this we use timezones such that noon (12:00 PM) happens near the Solar Noon.

- The Offset: The world is divided into vertical slices (zones). Each zone is defined by how many hours (and minutes) it is ahead (+) or behind (-) UTC.
- While offsets are mathematical, Timezones are political. Some governments decide to shift their offset twice a year (Daylight Saving Time) or redraw the lines entirely.
- Key Distinction: 
	- An Offset is a *fixed duration* (e.g., `-05:00`). 
	- A Timezone (e.g., `Europe/Amsterdam`) is a *history of rules* that tells you which offset applies at a specific moment.

> The IANA (Internet Assigned Numbers Authority) timezone database is the global standard for translating between absolute and civil time.

#### 7. In Computing 

**Unix Time** is the standard for modern computing. It is defined as the number of seconds elapsed since the **Unix Epoch**. 
$$
1970\text{-}01\text{-}01 \quad 00:00:00 \quad \text{UTC}
$$
Crucially, Unix Time is NOT a true count of SI seconds. It follows UTC. Because POSIX standards dictate that a day is exactly 86,400 seconds, **Unix Time ignores Leap Seconds**. When a Leap Second occurs (e.g., at the end of 1998), the Unix counter repeats the same second or stalls, rather than ticking up to a unique number.

As a consequence, the difference between two Unix timestamps is _not_ guaranteed to be the actual physical duration in SI seconds. If a leap second occurred between time $A$ and time $B$, the Unix difference will be 1 second shorter than the time measured by a stopwatch.

With Unix Time, we have an unambiguous label for a point in time, but it is just a single large number, which is unreadable for humans. But with all these variables (Years, Months, Days, Hours, Minutes, Seconds, and Offset), just writing a date and time is ambiguous. Does `01/02/03` mean Jan 2nd, 2003 (US), Feb 1st, 2003 (Europe), or Feb 3rd, 2001 (Japan)?

To solve this, we use the **ISO 8601** standard. It is the only format you should ever use when systems talk to one another. The rules:

- Largest units first (Year $\rightarrow$ Second). This ensures that alphabetical sorting is also chronological sorting.
- Always use 2 digits for months/days (e.g., 05, not 5) to maintain string length.
- Hyphens separators for dates (-), Colons for time (:), and a T to separate the two.
- If the time is in UTC, append a **`Z`** (Zulu time). If not, append the offset (e.g., `+05:30` or `-08:00`).

Example: `2023-12-25T14:30:00Z` represents December 25th, 2023, at 2:30 PM UTC. 


