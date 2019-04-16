DROP DATABASE IF EXISTS aliens_db;
CREATE DATABASE aliens_db;
USE aliens_db;

-- Create the table burgers.
CREATE TABLE cryptids
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    item_num INT NOT NULL,
    obj_class VARCHAR(500) NOT NULL,
    procedures VARCHAR(500) NOT NULL,
    descriptions TEXT NOT NULL,
    page_url VARCHAR(500) NULL,
    img_url VARCHAR(500) NOT NUll,
    PRIMARY KEY (id)
);	

INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1002", 1002, "Euclid",
"Special Containment Procedures: All objects tied to instances of SCP-1002 are to be contained in a brightly lit 6m x 6m chamber. SCP-1002-6 is to be contained 
in a suitably sized hangar. No D-class personnel are to come within ten (10) meters of the containment chamber or hangar. No personnel involved with end-of-the-month
 termination for D-class personnel are to come within ten (10) meters of the containment chamber or hangar.",
 
" SCP-1002 is an abnormal shadow belonging to a group of six (6) objects currently in Foundation custody. Each of these objects possesses the shadow of a humanoid individual, dressed in a law enforcement uniform. Objects tied to SCP-1002 currently in containment are:

SCP-1002-1: A grandfather clock retrieved from ███████, possesses the shadow of a medieval knight.
SCP-1002-2: A small pole retrieved from ███ ████, possesses the shadow of a member of the ██PD.
SCP-1002-3: Large printer retrieved from ███ ███████, possesses the shadow of a Roman soldier.
SCP-1002-4: A pigeon retrieved from ███████, possesses the shadow of a member of the ██████ Police Force.
SCP-1002-5: A kitchen knife retrieved from ███ █████, possesses the shadow of a security guard at the ██████ Casino.
SCP-1002-6: A Boeing 737 retrieved from ███████, possesses the shadow of a member of a SWAT team.
The objects tied to SCP-1002 do not behave in an anomalous manner with the exception of their shadow. SCP-1002 tied to these objects are dormant and stationary until an individual who has committed what is socially considered to be a crime in the last six (6) months comes within ten (10) meters of the object they are tied to. At this point, SCP-1002 instances will become active and manifest as a dark humanoid figure similar in appearance to their dormant stage.

SCP-1002 will then attempt to pursue the targeted individual. SCP-1002 instances have demonstrated high levels of agility and appear to be able to track their target through walls. If the targeted individual moves ten (10) meters away from the SCP-1002 instance, it will return to a dormant state at its original object.
If the individual is caught by this manifestation, they will inflict a physical punishment directly proportionate to the crime the individual has committed. Despite the severity of this physical punishment, the victim will remain alive and conscious until taken ten (10) meters away from the manifestation. Through careful study, researchers have discovered punishments tied to the following crimes:
",
"http://www.scp-wiki.net/scp-1002",
"http://scp-wiki.wdfiles.com/local--files/scp-1002/scpdemiser.jpg");


INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1005", 1005, "Safe",

"Special Containment Procedures: SCP-1005 is to be maintained at Site-17 in a 3m x 3m x 3m holding room, equipped with dim lighting. SCP-1005 has no nutritional 
requirements aside from a need to maintain hydration levels; humidity in holding chamber should be kept at a minimum of 70% when possible, and at least one (1) 
liter of water provided for consumption daily.",

"Description: SCP-1005 is a sapient humanoid entity composed of semi-solid blue paint, with exact shades ranging from near-white to deep navy. The surface of SCP-1005 has an average tensile strength approximately 75% that of human skin; this includes its clothing. SCP-1005 is unable to consciously control the viscosity or shape of its overall form beyond the normal locomotion of a humanoid body; it can, however, control its outer layer to a point where it can choose whether or not its paint will smear on contacting surfaces. The degree to which SCP-1005 is able to control itself in such a manner becomes lessened if over-hydrated.

To date, SCP-1005 has been extremely cooperative with researchers, showing a polite and professional attitude. SCP-1005 lacks most complex emotions beyond levels 
of satisfaction and comfort and has demonstrated only limited facial expressions outside of movements required to speak. Additionally, SCP-1005 seems to lack the 
ability to understand abstract concepts: it is perfectly able to count, speaks fluent English with a slight Northern-Midwest American accent, and can perform simple
 tasks; complicated mathematics, emotional responses and existential topics such as religion leave SCP-1005 confused, usually stating that it simply does not understand.
  The only driving force behind SCP-1005 is a desire to make its owners happy with it, usually through cooperating with testing protocols but also while serving as
   entertainment or still-life living artwork for personnel during recreational periods.",

"http://www.scp-wiki.net/scp-1005",
"http://scp-wiki.wdfiles.com/local--files/scp-1005/PaintedMan.jpg");

INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1006", 1006, "Safe",
"Special Containment Procedures: SCP-1006 is contained within a 213m radius in [REDACTED] National Park and should be checked biweekly.
 Civilian access is to be denied by means of an 'endangered species' cover story. Relocation of SCP-1006 is strongly discouraged due to 
 the fragility of individual members and their sensitivity to habitat changes.",

"Description: SCP-1006 is an organized collective of an unknown species of the genus Araneus. Individual members have achieved sapience through
 unknown means and have established a rudimentary system of government resembling Marxist communism.
 
 SCP-1006 is a social community, with some members maintaining the web and others apparently chosen to maintain the agenda of the whole. Once 
 supplied a source of black ink and poster sheets, SCP-1006 will communicate with humans by creating signs written in English. These communications
 are largely centered around demands for the dismantling of western imperialism, a scathing critique of the bourgeoisie, and a request for less 
 mosquito spraying in the surrounding area of the park.
 
 Addendum: The skeletal remains of a male human being were found in an area of the web, surrounded by dead insects and a variety of small shiny objects
 such as bottle caps and pebbles, along with the occasional pocket watch and bits of metal in apparent reverence. SCP-1006 does not allow the skeleton
 to be disturbed, but passive analysis indicates that the male died decades prior from a blunt trauma to the back of the head. Identification located 
 near the body identifies him as a known political radical, reported missing from the nearby town of ███ ████, Texas",
 
 "",
 
 "http://www.scp-wiki.net/scp-1006");
 
 INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1007", 1007, "Safe",

"Special Containment Procedures: When inactive, SCP-1007 is to be kept in a standard coffin along with SCP-1007-1. The subject may only be activated 
during routine testing. As of current regulations on ""Misters,"" SCP-1007 is to be contained in Hall 8 of Site 13.",

"Description: SCP-1007 appears to be a male of indeterminate ethnicity who undergoes the entire human life cycle within a 75 minute time-frame. The 
subject ages at a rate of approximately one year per minute. Once 75 minutes have elapsed, the subject will invariably expire of spontaneous cessation
 of metabolic activity with no evident cause. It reports feeling excruciating pain during the first 16 minutes, when its bones and muscles are changing
 shape very rapidly. This process violates the First Law of Thermodynamics, as the subject does not seem to require any energy input to fuel the massive
 amount of cellular growth.
SCP-1007-1 is a key that fits into a small metal keyhole inserted into the subject's back, in between its shoulder blades. X-ray scans have shown
 that the keyhole is an empty socket with no internal mechanism. When SCP-1007-1 is turned, the subject's physical age is reversed by one year for
 each turn until it has regressed to the form of a neonate. It is not known where the mass that is removed from the subject's body as it shrinks 
 disappears to. If this is done after the subject's 75 minute lifespan has elapsed, the subject will ""reactivate."" If the subject has been ""dead""
 for long enough",
 
 "vhttp://www.scp-wiki.net/scp-1007",
 
 "");

 INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1009", 1009, "Safe",

"Special Containment Procedures: When inactive, SCP-1007 is to be kept in a standard coffin along with SCP-1007-1. The subject may only be activated 
during routine testing. As of current regulations on ""Misters,"" SCP-1007 is to be contained in Hall 8 of Site 13.",

"Description: SCP-1007 appears to be a male of indeterminate ethnicity who undergoes the entire human life cycle within a 75 minute time-frame. 
The subject ages at a rate of approximately one year per minute. Once 75 minutes have elapsed, the subject will invariably expire of spontaneous 
cessation of metabolic activity with no evident cause. It reports feeling excruciating pain during the first 16 minutes, when its bones and muscles
 are changing shape very rapidly. This process violates the First Law of Thermodynamics, as the subject does not seem to require any energy input 
 to fuel the massive amount of cellular growth.

SCP-1007 was recovered by Task Force Tau-6 along with SCP-████, SCP-████, and SCP-████ during a raid on the California mansion of [REDACTED], a 
known customer of Marshall, Carter, and Dark Ltd. [REDACTED] admitted that he had obtained SCP-1007 from an MCD-sponsored auction, and claimed 
that at the auction in question there had been at least four other ""Misters"" for sale, though he did not recall to whom they had been sold.",

"http://www.scp-wiki.net/scp-1009",

"http://scp-wiki.wdfiles.com/local--files/scp-1009/trees2-small.png");
 
  INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1034", 1034, "Safe",

"Special Containment Procedures: SCP-1034 is to be contained in a pass-code protected safe when not in use. Foundation personnel handling SCP-1034 are required 
to wear EN388 xx44 rated gloves. In the event of accidental skin contact or puncture, the affected subject must be restrained and SCP-1034 wrested from subject’s
 possession. If subject was cut at any point, SCP-1034 must be immediately rinsed and sterilized.",

"Description: SCP-1034 consists of a rusted, semicircular suture needle 5 cm in chord length and a spool consisting of twine approximately 1 mm thick. If the thread 
is removed from the needle, a second spool appears with the end of the twine threaded through the eye of SCP-1034. This only occurs when the needle is not under direct or recorded observation.

SCP-1034 was discovered and filed as evidence by ██PD pursuant to the arrest of serial killer █████ ████. Agents were alerted to possible anomalous activity when
 a ██PD forensics agent was found dead in the same manner as the victims of █████ ████ despite the latter being held in custody. Initial Foundation interviews with
 █████ ████ described SCP-1034 and its effects in some detail, allowing for safe retrieval. █████ ████ was later recruited as D-3826 and interviewed a second time.
 The contents of this second interview are displayed in Addendum ",

"http://www.scp-wiki.net/scp-1034",

"http://scp-wiki.wdfiles.com/local--files/scp-1034/needle2.jpg");

INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1027", 1027, "Euclid",

"Special Containment Procedures: SCP-1027 is to be housed in a standard liquid containment tank, immersed in a saline solution. Personnel are to avoid direct physical contact with SCP-1027 
with the exception of feeding staff. SCP-1027 is to be given one (1) fresh bovine brain per week. All staff involved in feeding of SCP-1027 are to wear Level-4 bio-protective equipment. In
 event of exposure to SCP-1027, affected personnel are to be immediately treated to standard containment protocols.",

"When presented with live prey, SCP-1027 will apparently merge with its nervous system, draining neurotransmitter agents over time, leading ultimately to death. However, when exposed to a living or recently deceased (less than 12 hours prior to exposure) human, SCP-1027 will instead infiltrate the brain through the auditory canal. Upon breaching the meningeal membranes, the neural ganglia of SCP-1027 will release a high dose of an apparently modified dopamine compound directly into the brain, in addition to an electrical impulse measured at approximately 150 millivolts. This combination has been shown to initiate basic brain activity in 9█% of cases. The nervous system of the subject will begin to modify itself into a new instance of SCP-1027. The neuroglia thicken, and the entire central nervous system detaches from the host body by accelerated decomposition. To date, no specimen of SCP-1027 has been shown to possess any memories prior to becoming detached, and have a functional intelligence level equivalent to that of a lower primate.",

"http://www.scp-wiki.net/scp-1027",

"http://scp-wiki.wdfiles.com/local--files/scp-1027/tumblr_lfrqpbXH601qzgcpyo1_500.png");

INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1083", 1083, "Safe",

"Special Containment Procedures: SCP-1083 is to be stored in a containment locker at Site 38 when not in use. SCP-1083 is to be transported to and from its locker only by junior researchers 
with no previous history of violent behavior, and only while wearing protective gloves. Under no circumstances are personnel with Level 2 or higher clearance to come into contact with SCP-1083.
 Testing with D-class personnel is prohibited due to lack of relevant data collected during experimentation.",

"By and large, most subjects exposed to SCP-1083 refuse to discuss their experiences with the object. Between 08/03/9█ and 02/11/0█, the only references made to the experience by exposed
 subjects were by D-class personnel shortly before their deaths, some of whom were noted to exclaim ""He's right, he's right, I deserve it, he's right"" or some variation of same. 
 Neither forced or chemical interrogation has been able to reveal any details about the nature of who ""he"" is or what alterations he makes to the personalities of affected subjects.",
 
 "http://www.scp-wiki.net/scp-1083",
 
 "http://scp-wiki.wdfiles.com/local--files/scp-1083/scp-1083.jpg");
 
 INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1100", 1100, "Keter",

"(Revised ██/██/200█)
A single sample of SCP-1100 is stored in a triple-redundant hermetically sealed container, which is to be stored in an evacuated, reinforced containment chamber at Site █. 
The container must be checked daily for deterioration. If necessary, the sample must be transferred to a new container via Procedure 1100-233/J to prevent any possible vaporization.
All direct experimentation on SCP-1100 has been suspended pending further investigation.",

"Description (Amended): (Revised █/██/200█) - 
SCP-1100 is a highly dangerous complex organic substance that causes anomalous transformations in natural plant and animal life. Despite being composed primarily of heavy proteins and
 [REDACTED], SCP-1100 will spontaneously vaporize into aerosol form, and can also be transmitted by direct contact with infected subjects, pollen, dander, and other excretions.",
 
 "http://www.scp-wiki.net/scp-1100",
 
 "http://scp-wiki.wdfiles.com/local--files/scp-1100/scp1100.jpg");

 INSERT INTO cryptids (name, item_num, obj_class, procedures, descriptions, page_url, img_url)
VALUES ("SCP-1111", 1111, "Euclid",

"A restricted zone has been established in a 2 km radius around SCP-1111-2; Cameras are suspended from weather balloons, 
constantly monitoring the enclosure. Individuals may not come within 1km of SCP-1111-2 without explicit written permission from a level 4 researcher or higher. Should SCP-1111-1 move away from 
SCP-1111-2, all personnel are to evacuate the restricted zone until SCP-1111-1 returns to its position beneath SCP-1111-2.",

"SCP-1111-1 is an entity with an appearance similar to that of Canis familiaris, commonly known as the domestic dog. The size of SCP-1111-1 varies with its distance from SCP-1111-2; directly
 beneath it, SCP-1111-1 is approximately 150 cm from ground to shoulders...Left alone, SCP-1111-1 lies down beneath SCP-1111-2. It does not appear to sleep, or, if it does, is able to do so 
 with its eyes completely open. It does not eat, drink, or breathe...
 SCP-1111-2 has the appearance of a man hanged by a noose from a tree.",
 
 "http://www.scp-wiki.net/scp-1111",
 
 "http://scp-wiki.wdfiles.com/local--files/scp-1111/hangmanq.jpg");
SELECT * FROM cryptids;