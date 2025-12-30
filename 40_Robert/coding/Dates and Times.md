Unfortunately for us, the universe does not use integers.

#### Intro

In computing we use **Absolute Time**, a scalar value representing the number of time units (usually Atomic Seconds) from some specified starting point (usually the Unix Epoch, 1970-01-01 00:00:00 UTC). This is great, and easy to do math with. But, humans do not live in Absolute Time. We use **Civil Time** (Calendars and Clocks), which comes with a host of complexities.

#### Origins

Units of time were originally defined as follows:

- **Year**: one cycle of the Earth around the sun.
- **Month**: one lunar cycle (which is not the same as lunar orbit).
- **Day**: one rotation of the Earth on its axis.
- **Hour**: Ancient Egyptians counted using Base-12, using the thumb as a pointer. They then divided the day and night into 12 segments. Giving 24 hours in a day. Base-12 was preferable over Base-10 as it was divisible by 2,3,4, and 6. 
- **Minutes** and **Seconds**: The Babylons liked Base-60 for a same reason, as it is the smallest number divisible by 2,3,4,5, and 6. Further dividing the hours into minutes and seconds, giving 60 minutes per hour, and 60 seconds per minute.

#### Modern Redefinition

These original units were derived from astronomy, which are unstable. The duration of an earth rotation, and a lunar cycle are both increasing as a consequence of the moon dragging on the oceans. The solar orbits are relatively stable, but fluctuate due to the gravitational pull of other planets (Jupiter/Saturn) and the "wobble" of Earth's axis (precession).

To correct for this, scientists defined the SI unit for time in 1967 as the atomic second. This unit was defined by the decay of a **Cesium-133** atom. This lead to a definition that was close to the original second, but precise, constant, and independent of astronomical cycles. 

With the new definition, 
- an earth rotation (day) takes approximately $86,400.002$ seconds.
- a lunar cycle (month) takes approximately $29.53059$ days.
- a solar orbit (year) takes approximately $365.24219$ days. 
- hours remained $60$ minutes, and minutes remained $60$ seconds.

#### The Problem

So we have two definitions of a second:
- The old definition: the duration of a day divided by $24 \times 60 \times 60 = 86,400$.
	- Days are a perfect multiple of seconds per definition, but definition is variable. 
- The modern definition: based on the behaviour of the Cesium-133 atom.
	- Constant, but days are no longer a perfect multiple of seconds.
> The solution became to use the modern definition, and use a leap second.

On top of this, years, months, and days are not perfect multiples of each other. To describe a date using civil time, we only want to use integers. 
> The solution became the Gregorian calendar.

Both solutions do one of the following:
1. they "give up" trying to match the astronomical event,
	- The average duration of a month, does not match the duration of a lunar cycle.
2. they alternate between slightly overshooting and undershooting such that the average sum of sub intervals approximates the true duration of the larger interval.
	- The average duration of a day, and a year match the duration of an earth rotation and earths solar orbit respectively.

#### Months

Since a lunar cycle is approximately $29.53$ days a simple calendar of 12 lunar cycles in a year wouldn't fit, requiring some compromise.

The early roman calendar only has 10 months (Martius through December), compromising 304 days. The remaining ~61 days were simply uncounted, being deemed a "monthless" period of waiting for spring. To close the gap, the months January and February were added to the beginning of the year, explaining why the etymologically numbered months are offset by two.

In $45 \text{ BC}$, Julius Caesar detached the months from the moon entirely. He distributed the extra days needed to match the solar year ($365$ days) across the 12 months, creating the arbitrary oscillating pattern of 30 and 31 days (with February taking the loss at 28).

#### The Zeroth Year

Our current year counting system was devised by a monk named Dionysius Exiguus in the year 525. He calculated the years since the incarnation of Jesus, labeling the ensuing years as AD (Anno Domini, "In the year of the Lord"). The preceding years became labeled using BC (Before Christ). 

However, the number Zero did not exist in European numerals at the time. Consequently, the traditional calendar jumps directly from $1 \text{ BC}$ to $\text{AD } 1$. To correct for this in modern computing and astronomy, we use Astronomical Year Numbering, inserting a mathematical year zero:
- $\text{AD } 1 \rightarrow \text{Year } 1$
- $1 \text{ BC} \rightarrow \text{Year } 0$
- $2 \text{ BC} \rightarrow \text{Year } -1$

#### Leap Years

Since a year is $365.24219$ days a simple calendar of 365 days would be off. To correct this we use leap years to approximate the fractional day.

1. Every year divisible by 4 is a leap year (adds one day)
	- This gives a year length of $365.25$ days.
2. Every year divisible by 100 is NOT a leap year
	- This gives a year length of $365.24$ days.
3. Every year divisible by 400 IS a leap year.
	- This gives a year length of $365.2425$ days.

This gets us accurate to within 1 day every 3,216 years, which is "close enough" for civilization.

> The combination of the Roman months, the zeroth year relative to the birth of Jesus, and leap years form the basis for the Gregorian Calendar.

#### Leap Seconds

Since a day is $86,400.002$ atomic seconds, a simple multiple of $24 \times 60 \times 60=86,400$ would be off. We use Leap Seconds to correct for the $2$ ms. 

On January 1, 1958, scientists synchronized two clocks, each counting seconds. 
- TAI (International Atomic Time): The weighted average of over 400 clocks counting atomic seconds worldwide. 
- UT1 (Universal Time): The time determined by the earth's rotation. Where one full rotation is 24 hours and consequently $86,400$ seconds.

These clocks diverge due to the slowing rotation of the Earth. 

**UTC (Coordinated Universal Time)** serves as the compromise. It ticks at the precise speed of Atomic Time (TAI) but is actively managed to remain within 0.9 seconds of Earth’s rotation (UT1). To maintain this alignment, the **IERS** (International Earth Rotation and Reference Systems Service) monitors the drift. Whenever the difference approaches the 0.9 second threshold, they order a **Leap Second**. Then at, midnight on either June 30 or December 31, the clock ticks: 
$$
23:59:59 \rightarrow 23:59:60 \rightarrow 00:00:00
$$
UTC is the standard used for civil time. 

> Leap years follow a fixed schedule, but these leap seconds do not. Requiring us to listen for updates from IERS. 

Global meteorologists voted in 2022 to stop adding leap seconds by 2035, deciding that the software bugs are worse than the time drift. Instead the intention is to let the offset grow for a century, and doing a larger correction (like a leap minute) in the distant future.

#### Timezones

Because the Earth is a rotating sphere, **Solar Noon** (when the sun is highest) happens at a different moment for every degree of longitude. To fix this we use timezones. 

- The Offset: The world is divided into vertical slices (zones). Each zone is defined by how many hours it is ahead (+) or behind (-) UTC.
- Political Complexity: While offsets are mathematical, Timezones are political. Some governments decide to shift their offset twice a year (Daylight Saving Time) or redraw the lines entirely.
- Key Distinction: 
	- An Offset is a *fixed duration* (e.g., `-05:00`). 
	- A Timezone (e.g., `Europe/Amsterdam`) is a *history of rules* that tells you which offset applies at a specific moment.

#### ISO8601
With all these variables (Years, Months, Days, Hours, Minutes, Seconds, and Offset), just writing a date and time is ambiguous. Does `01/02/03` mean Jan 2nd, 2003 (US), Feb 1st, 2003 (Europe), or Feb 3rd, 2001 (Japan)? To solve this, we use the **ISO 8601** standard. It is the only format you should ever use when systems talk to one another.

The rules:
- Largest units first (Year $\rightarrow$ Second). This ensures that alphabetical sorting is also chronological sorting.
- Always use 2 digits for months/days (e.g., 05, not 5) to maintain string length.
- Hyphens separators for dates (-), Colons for time (:), and a T to separate the two.
- The Timezone: If the time is in UTC, append a **`Z`** (Zulu time). If not, append the offset (e.g., `+05:30` or `-08:00`).

Example: `2023-12-25T14:30:00Z` represents December 25th, 2023, at 2:30 PM UTC. 

#### Conclusion

Timekeeping is fundamentally messy because we are attempting to force the fractional, and fluctuating motion of celestial bodies into the rigid, integer-based logic of our calendars and clocks. 

To navigate this complexity effectively, you should adopt the following mental model. **Separate the instant from the label** an event happens at one specific, absolute, moment in the universe (Physics). A date and time are merely a "label" for that moment based on human rules and locations (Politics). ISO8601 is the standard for unambiguous labels. 




