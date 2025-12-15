---
  title: Gendered bias in computer science in French Academia
  pagetitle: Index
  mainpagetitle:
  navigation: false

  next_page:
  next_page_url:
  prev_page:
  prev_page_url:

  bibliography: biblio.bib
  csl: ieee.csl
  link-citations: true
 
---

# Additional Statistics

This page summarizes a few statistics around gender bias in computer science in French academia (so-called section 27 of the CNU), based on publicly available data. 

Conclusions:

 * significant efforts are required on the **hiring side**
 * there is a biased and probably **unfair task distribution**
 * their may be some **specific pressure** w.r.t. productivity put on women during their thesis



::::: warning

<span style="color: #9a6700;">⚠ Warning</span>

To discuss and reflect on those issues, it is crucial to consider also the question of **gender-based violence**, which is notably demonstrated to make women more likely to leave academia than men, and is probably one of the biggest factor to fight against. This page focuses on aggregating publicly available data, to make easily available, and also show that other kind of statistical bias are present and that actions at many different levels are required.

:::::



## Hiring practices

Highlights:

 * When considering the total population (MCF + PU), **we are stuck** and not making any significant progress.
 * It is **worse for more competitive positions** (CR, DR, PU), where we are way below the proportion of potential candidates.
 * There is only a slight improvement on the CNRS side, while CR INRIA is worsening.


![](pics/plot-positions.png)


## Bias around PhD


Highlights for people in section 27: 

 * **Men supervise more than women** (about 1.5 times more on average, and 60% of women don't supervise vs 45% of men).
 * **Women are more often jury member** for thesis, but in addition the global repartition is very bad for women, where a lot of pressure is put on a few of them. (many women never do any jury, while 6% of women do more than 2 jury per year, vs only 1% of men). 
 * **Women's PhD thesis are slightly longer** in number of pages than men (on average 7 pages longer out of 180).

Effect 1 and 2 appear specific to section 27, and disappears when we consider all jury members of computer science related thesis, thus including international people/CNRS/INRIA. This means a specific attention should be given to this in our universities: how are different task distributed? Are some women asked and pushed to be in jury too much? Are women teaching more than men, and left without time for supervision? Are people with HdR offering to co-supervise with women without HdR less than men without HdR?

Effect 3 may imply that explicit or implicit pressure is put on women to produce more, to make them prove that they belong. More research would be needed to explain this phenomenon, but we can still be on the lookout for its consequences.

The plots below are density functions (the area below the lines sum to 1). On the first one, we for instance see that way more women than men in proportion never do any thesis jury (the red bar is bigger than the purple one at 0), and that the last decile is way higher for women.


![](pics/examiner.sec27.png)

![](pics/supervised.sec27.png)

![](pics/length.info.zoom.png)

## Methodology

For MCF/PU positions, data was aggregated from the "Fiches démographiques des sections du Conseil national des universités (CNU)" for section 27, for INRIA, from the "Rapport Social Unique" 2022 and 2023, for CNRS, from "Rappor de conjoncture" 2018 and 2025. 

For PhD thesis gender/length/review/supervisions, data was scrapped from [theses.fr](https://theses.fr) and [theses.hal.science/](https://theses.hal.science/), supported with the electoral body of section 27 of 2019 and 2024 (which also contains the gender).  Some errors are very likely to be contained, but for checkable data, data is consistent.

Notably, gender is mostly guessed using an INSEE database of name popularity w.r.t. gender in France. For CNU 27 people, gender was correctly guessed with above 95% probability.

A PhD thesis was considered to belong to section 27 if at least one of the director is inside the section.

Several bias/limitations are present:

 * gender is guessed and there is clearly room for error. In particular, the error rate will be higher for names which are rare in France.
 * the scrapped websites are not consolidated, and the link with section 27 has to be made manually. E.g, domain is an arbitrary string for theses.fr, theses.fr contains some redundant profile, and people sometimes have a unique id identifier, sometimes not. Some people with an id are not always linked to the id.
 
Data would need to be manually inspected based on random sampling to increase trust in the results. Some statistically significant bias would require a quantitative analysis to identify the origin. 
