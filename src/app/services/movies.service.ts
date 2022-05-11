import { Injectable } from '@angular/core';
import { IPeliculas } from '../interfaces/pelicula.interface';
import { ICard, ISlider } from '../interfaces/slider-interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  peliculas : IPeliculas[] = [
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'moon-knight',
      src         : '/assets/movies/moonknight/moonknight.jpeg',
      srcBig      : '/assets/movies/moonknight/moonknight-big.jpeg',
      cover       : '/assets/movies/moonknight/moonknight-cover.jpeg',
      titulo      : 'Moon Knight',
      texto       : 'New Episode Every Wednesday',
      logo        : '/assets/movies/moonknight/moonknight-logo.png',
      description : 'When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc’s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.',
      trailer     : 'https://www.disneyplus.com/en-gb/video/bb4e62e6-99b7-413a-9f19-77ea89aed6b1',
      details     :
        {
          duration         : '47m',
          releaseDate      : '2022',
          genre            : [ 'Fantasy', 'Super Hero', 'Action-Adventure' ],
          rating           : 16,
          starring         : [ 'Oscar Isaac', 'Ethan Hawke', 'May Calamawy' ],
          season           : 1,
          subtitles        : true,
          audioDescription : true,
          photosensitive   : true,
          sinopsis         : 'When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc’s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.'
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'this-is-us',
      src         : '/assets/movies/this-is-us/us.jpg',
      srcBig      : '/assets/movies/this-is-us/us-big.jpg',
      cover       : '/assets/movies/this-is-us/us-cover.jpeg',
      titulo      : 'This Is Us',
      texto       : 'New Episode Every Wednesday',
      logo        : '/assets/movies/this-is-us/us-logo.png',
      description : 'A refreshingly honest and provocative series following a unique ensemble whose paths cross and life stories intertwine in curious ways. THIS IS US is a smart, modern dramedy that will challenge your everyday presumptions about the people you think you know.',
      details     :
        {
          duration         : '43m',
          releaseDate      : '2016 - 2022',
          genre            : [ 'Romance', 'Drama' ],
          rating           : 14,
          starring         : [ 'Milo Ventimiglia', 'Mandy Moore', 'Sterling K.Brown', 'Chrissy Metz', 'Justin Hartley', 'Susan Kelechi Watson' ],
          season           : 6,
          subtitles        : true,
          audioDescription : false,
          photosensitive   : false,
          sinopsis         : 'Everyone has a family. And every family has a story. THIS IS US chronicles the Pearson family across the decades: from Jack (Milo Ventimiglia) and Rebecca (Mandy Moore) as young parents in the 1980s to their adult kids Kevin (Justin Hartley), Kate (Chrissy Metz) and Randall (Sterling K. Brown) searching for love and fulfillment in the present day. This grounded, life-affirming dramedy reveals how the tiniest events in our lives impact who we become, and how the connections we share with each other can transcend time, distance and even death.'
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'greys-anatomy',
      src         : '/assets/movies/greys-anatomy/grey.jpg',
      srcBig      : '/assets/movies/greys-anatomy/grey-big.jpg',
      cover       : '/assets/movies/greys-anatomy/greys-cover.jpeg',
      titulo      : "Grey's Anatomy",
      texto       : 'New Episode Now Streaming',
      logo        : '/assets/movies/greys-anatomy/grey-logo.png',
      description : 'The doctors face life-or-death decisions daily.',
      details     :
        {
          duration         : '43m',
          releaseDate      : '2005 - 2021',
          genre            : [ 'Medical', 'Drama', 'Soap Opera / Melodrama', 'Procedural' ],
          rating           : 14,
          starring         : [ 'Milo Ventimiglia', 'Mandy Moore', 'Sterling K.Brown', 'Chrissy Metz', 'Justin Hartley', 'Susan Kelechi Watson' ],
          season           : 18,
          subtitles        : true,
          audioDescription : false,
          photosensitive   : false,
          sinopsis         : 'The high-intensity medical drama follows Meredith Grey and the team of doctors at Grey Sloan Memorial who are faced with life-or-death decisions on a daily basis. They seek comfort from one another, and, at times, more than just friendship. Together they discover that neither medicine nor relationships can be defined in black and white.'
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'better-nate-than-ever',
      src         : '/assets/movies/better-nate/nate.jpeg',
      srcBig      : '/assets/movies/better-nate/nate-big.jpeg',
      cover       : '/assets/movies/better-nate/nate-cover.jpeg',
      titulo      : 'Better NATE Than Ever',
      logo        : '/assets/movies/better-nate/nate-logo.png',
      logoCover   : '/assets/movies/better-nate/nate-logo-cover.png',
      description : "Thirteen-year-old Nate has big Broadway dreams. But when he isn't cast in the school play, he and his best friend Libby sneak off to the Big Apple, where he's unexpectedly reunited with his long-lost Aunt Heidi. Together they must prove that life’s greatest adventures are only as big as your dreams.",
      trailer     : 'https://www.disneyplus.com/en-gb/video/8cecacab-e1dd-47d2-aa36-6c1525c81a28',
      details     :
        {
          duration         : '1h 34m',
          releaseDate      : '2022',
          genre            : [ 'Coming of Age', 'Family', 'Comedy', 'Music' ],
          rating           : 9,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : true,
          sinopsis         : 'Thirteen-year-old Nate Foster has big Broadway dreams. There’s only one problem — he can’t even land a part in the school play. But when his parents leave town, Nate and his best friend Libby sneak off to the Big Apple for a once-in-a-lifetime opportunity to prove everyone wrong. A chance encounter with Nate’s long-lost Aunt Heidi turns his journey upside-down, and together they must learn that life’s greatest adventures are only as big as your dreams. Based on the award-winning novel.'
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'parallels',
      src         : '/assets/movies/parallels/parallels.jpeg',
      srcBig      : '/assets/movies/parallels/parallels-big.jpg',
      cover       : '/assets/movies/parallels/parallels-cover.jpg',
      titulo      : 'Parallels',
      texto       : 'All Episodes Now Streaming',
      logo        : '/assets/movies/parallels/parallels-logo.png',
      description : "The lives of four childhood friends, Bilal, Romane, Sam and Victor, are seriously disrupted when a mysterious event separates them, sending them into parallel dimensions. They try to understand what happened and strive to turn the clocks back, in order to return to their former world.",
      details     :
        {
          duration         : '37m',
          releaseDate      : '2022',
          genre            : [ 'Drama', 'Science Fiction' ],
          rating           : 12,
          starring         : [ 'Oscar Isaac', 'Ethan Hawke', 'May Calamawy' ],
          season           : 1,
          subtitles        : true,
          audioDescription : true,
          photosensitive   : true,
          sinopsis         : 'Four childhood friends, Sam, Bilal, Romane and Victor, are leading a calm existence in a peaceful village in the mountains when a mysterious event turns their worlds upside down. In a split second, the universe discards its rules and reshuffles everything: the present, the future and multiverses merge, separating the teens and sending them into parallel worlds, in different time frames. They set about trying to fathom out what happened and strive to find each other and turn the clocks back, to return to the world “they used to live in.” Facing their potential destinies will be the opportunity to grow up and to see things a new way, as their parents will or as Lieutenant Retz will, having to deal for the first time with an investigation challenging his scientific mind.'
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'death-on-the-nile',
      src         : '/assets/movies/death-on-the-nile/nile.jpg',
      srcBig      : '/assets/movies/death-on-the-nile/nile-big.jpg',
      cover       : '/assets/movies/death-on-the-nile/nile-cover.jpg',
      titulo      : 'Death on the Nile',
      texto       : 'Coming on Wednesday to Disney+',
      logo        : '/assets/movies/death-on-the-nile/nile-logo.png',
      description : "Hercule Poirot’s Egyptian vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couple’s idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers.",
      trailer     : 'https://www.disneyplus.com/en-gb/video/4364e94e-517d-4e40-b467-f074f6658d29',
      details     :
        {
          duration         : '2h 8m',
          releaseDate      : '2022',
          genre            : [ 'Mystery', 'Drama' ],
          rating           : 12,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : 'A love triangle gone bad is at the center of this daring mystery-thriller based on the 1937 novel by Agatha Christie, about the emotional chaos and deadly consequences triggered by obsessive love. Belgian sleuth Hercule Poirot’s Egyptian vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couple’s idyllic honeymoon is tragically cut short. A wealthy socialite engaged to a handsome, unemployed bachelor (who previously was passionately entwined with her best friend from school) hosts a lavish wedding party aboard the Karnak as it sails down the Nile, which is attended by a group of exotic and amazing people who claim to be their friends. As a result of the karma generated when one person steals another person’s love, fireworks ensue. Set against an epic landscape of sweeping desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers and enough wicked twists and turns to keep audiences guessing until the final, shocking denouement.'
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'the-eyes-of-tammy-faye',
      src         : '/assets/movies/tammy-faye/tammy.jpeg',
      srcBig      : '/assets/movies/tammy-faye/tammy-big.jpeg',
      cover       : '/assets/movies/tammy-faye/tammy-cover.jpg',
      titulo      : 'The Eyes of Tammy Faye',
      texto       : 'Academy Award® Winner',
      logo        : '/assets/movies/tammy-faye/tammy-logo.png',
      description : '"The Eyes of Tammy Faye" is an intimate look at the extraordinary rise, fall and redemption of televangelist Tammy Faye Bakker. In the 1970s and ’80s, Tammy Faye and Jim Bakker built a burgeoning religious broadcasting network and theme park – until rivals, financial wrongdoing and scandal toppled their empire.',
      trailer     : 'https://www.disneyplus.com/en-gb/video/d4d6eace-ec6b-4853-b669-621ce333c6b8',
      details     :
        {
          duration         : '2h 8m',
          releaseDate      : '2021',
          genre            : [ 'Drama', 'Biographical' ],
          rating           : 12,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : '"The Eyes of Tammy Faye" is an intimate look at the extraordinary rise, fall and redemption of televangelist Tammy Faye Bakker. In the 1970s and ’80s, Tammy Faye and her husband, Jim Bakker, rose from humble beginnings to create the world’s largest religious broadcasting network and theme park. At first, they were revered for their messages of love, acceptance and prosperity. All the while, Tammy Faye was legendary for her indelible eyelashes, idiosyncratic singing, and eagerness to embrace people from all walks of life. However, it wasn’t long before financial improprieties, scheming rivals, and scandal toppled their carefully constructed empire. Directed by Michael Showalter and written by Abe Sylvia, "The Eyes of Tammy Faye" also features Cherry Jones and Vincent D’Onofrio.'
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'olivia-rodrigo-driving-home-2-u',
      src         : '/assets/movies/olivia-rodrigo/olivia.jpeg',
      srcBig      : '/assets/movies/olivia-rodrigo/olivia-big.jpg',
      cover       : '/assets/movies/olivia-rodrigo/olivia-cover.jpg',
      titulo      : 'Olivia Rodrigo: driving home 2 u',
      texto       : 'GRAMMY® Award Winner',
      logo        : '/assets/movies/olivia-rodrigo/olivia-logo.png',
      description : "Singer-songwriter Olivia Rodrigo takes a familiar road trip from Salt Lake City, where she began writing her debut album 'SOUR', to Los Angeles. Here, she recounts the memories of writing and creating her record-breaking album and shares her feelings as a young woman navigating a specific time in her life.",
      trailer     : 'https://www.disneyplus.com/en-gb/video/195887c1-c96a-4a8e-a977-08da1b629cb9',
      details     :
        {
          duration         : '1h 16m',
          releaseDate      : '2021',
          genre            : [ 'Documentary', 'Music' ],
          rating           : 12,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : "Singer-songwriter Olivia Rodrigo takes a familiar road trip from Salt Lake City, where she began writing her debut album 'SOUR', to Los Angeles. Along the way, Rodrigo recounts the memories of writing and creating her record-breaking debut album and shares her feelings as a young woman navigating a specific time in her life. Through new live arrangements of her songs, intimate interviews and never-before-seen footage from the making of the album, the audience will follow Olivia along on a cinematic journey exploring the story of 'SOUR'. Directed by Stacey Lee, 'Olivia Rodrigo: driving home 2 u' is produced by Interscope Films and Supper Club."
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'turning-red',
      src         : '/assets/movies/turning-red/turning.jpeg',
      srcBig      : '/assets/movies/turning-red/turning-big.jpeg',
      cover       : '/assets/movies/turning-red/turning-cover.jpg',
      titulo      : 'Turning Red',
      logo        : '/assets/movies/turning-red/turning-logo.png',
      logoCover   : '/assets/movies/turning-red/turning-logo-cover.png',
      description : "Disney and Pixar’s 'Turning Red' introduces Mei Lee, a confident, dorky 13-year-old torn between staying her mother’s dutiful daughter and the chaos of adolescence. Her protective, if not slightly overbearing mother, Ming, is never far from her daughter—an unfortunate reality for the teenager. And as if changes to her interests, relationships and body weren’t enough, whenever she gets too excited, she suddenly turns into a giant red panda!",
      trailer     : 'https://www.disneyplus.com/en-gb/video/4548143a-a7e3-44fa-896c-6e7cb72cd4a3',
      details     :
        {
          duration         : '1h 47m',
          releaseDate      : '2022',
          genre            : [ 'Coming of Age', 'Family', 'Comedy', 'Fantasy', 'Animation' ],
          rating           : 9,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : true,
          sinopsis         : "Disney and Pixar’s 'Turning Red' introduces Mei Lee (voiced by Rosalie Chiang), a confident, dorky 13-year-old torn between staying her mother’s dutiful daughter and the chaos of adolescence. Her protective, if not slightly overbearing mother, Ming (voiced by Sandra Oh), is never far from her daughter—an unfortunate reality for the teenager. And as if changes to her interests, relationships and body weren’t enough, whenever she gets too excited (which is practically ALWAYS), she suddenly turns into a giant red panda! Directed by Academy Award® winner Domee Shi (Pixar short 'Bao') and produced by Lindsey Collins."
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'nightmare-alley',
      src         : '/assets/movies/nightmare-alley/nightmare.jpg',
      srcBig      : '/assets/movies/nightmare-alley/nightmare-big.jpg',
      cover       : '/assets/movies/nightmare-alley/nightmare-cover.jpg',
      titulo      : 'Nightmare Alley',
      logo        : '/assets/movies/nightmare-alley/nightmare-logo.png',
      logoCover   : '/assets/movies/nightmare-alley/nightmare-logo-cover.png',
      description : "From visionary filmmaker Guillermo del Toro comes a suspenseful psychological thriller about a manipulative carnival man (Bradley Cooper) who teams with an equally deceptive psychiatrist (Cate Blanchett) to grift the wealthy in 1940s New York society. Del Toro co-wrote the enthralling film with Kim Morgan, based on William Lindsay Gresham’s novel.",
      trailer     : 'https://www.disneyplus.com/en-gb/video/869631bb-6f59-4565-85f4-61312958f2bb',
      details     :
        {
          duration         : '2h 31m',
          releaseDate      : '2021',
          genre            : [ 'Film Noir', 'Thriller', 'Crime' ],
          rating           : 16,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : "From visionary filmmaker Guillermo del Toro comes this noir-style psychological thriller starring Bradley Cooper and Cate Blanchett that’s set against the dark backdrop of carnival life. When charismatic but down-on-his-luck Stanton Carlisle (Cooper) endears himself to clairvoyant Zeena (Toni Collette) and her has-been mentalist husband Pete (David Strathairn) at a traveling carnival, he crafts what seems to be a golden ticket to success. The more he uses his newly acquired knowledge to grift the wealthy elite of 1940s New York society, the more his ambition grows. Soon, with the virtuous Molly (Rooney Mara) loyally by his side, Stanton plots to con a dangerous tycoon (Richard Jenkins) with the aid of a mysterious psychiatrist (Blanchett), who might turn out to be his most formidable opponent yet. Also included in the all-star cast of NIGHTMARE ALLEY are Willem Dafoe, Ron Perlman and Mary Steenburgen. Master storyteller del Toro directed the taut thriller, which he co-wrote with Kim Morgan, based on the novel by William Lindsay Gresham."
        }
    },
    {
      type        : {
        cover     : true,
        new       : true,
        coming    : false
      },
      url         : 'west-side-story',
      src         : '/assets/movies/west-side-story/westside.jpg',
      srcBig      : '/assets/movies/west-side-story/westside-big.jpg',
      cover       : '/assets/movies/west-side-story/westside-cover.jpg',
      titulo      : 'West Side Story',
      texto       : 'Academy Award® Winner',
      logo        : '/assets/movies/west-side-story/westside-logo.png',
      description : "From visionary filmmaker Guillermo del Toro comes a suspenseful psychological thriller about a manipulative carnival man (Bradley Cooper) who teams with an equally deceptive psychiatrist (Cate Blanchett) to grift the wealthy in 1940s New York society. Del Toro co-wrote the enthralling film with Kim Morgan, based on William Lindsay Gresham’s novel.",
      trailer     : 'https://www.disneyplus.com/en-gb/video/36e320d7-892b-44cd-9598-ab44ae3b1207',
      details     :
        {
          duration         : '2h 38m',
          releaseDate      : '2021',
          genre            : [ 'Film Noir', 'Thriller', 'Crime' ],
          rating           : 12,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : "Directed by Academy Award® winner Steven Spielberg, from a screenplay by Pulitzer Prize and Tony Award® winner Tony Kushner, 'West Side Story' tells the classic tale of fierce rivalries and young love in 1957 New York City. This reimagining of the beloved musical stars Ansel Elgort (Tony), Ariana DeBose (Anita), David Alvarez (Bernardo), Mike Faist (Riff), Brian d’Arcy James (Officer Krupke), Corey Stoll (Lieutenant Schrank), Josh Andrés Rivera (Chino), with Rita Moreno (as Valentina, who owns the corner store where Tony works), and introducing Rachel Zegler (Maria). Moreno – one of only three artists to be honoured with Academy®, Emmy®, Grammy®, Tony® and Peabody Awards – is also one of the film’s executive producers. Bringing together the best of both Broadway and Hollywood, the film’s creative team includes Kushner, who is also an executive producer, Tony Award® winner Justin Peck, who choreographed the musical numbers in the film, renowned Los Angeles Philharmonic conductor and Grammy Award® winner Gustavo Dudamel, who conducted the recording of the iconic score, Academy Award®-nominated composer and conductor David Newman ('Anastasia'), who arranged the score, Tony Award®-winning composer Jeanine Tesori ('Fun Home', 'Thoroughly Modern Millie'), who supervised the cast on vocals, and Grammy®-nominated music supervisor Matt Sullivan ('Beauty and the Beast', 'Chicago'), who was executive music producer for the film. The film is produced by Spielberg, Academy Award®-nominated producer Kristie Macosko Krieger and Tony Award®-winning producer Kevin McCollum. 'West Side Story' has been adapted for the screen from the original 1957 Broadway show, based on the stage play and book by Arthur Laurents, play conceived, directed and choreographed by Jerome Robbins, lyrics by Stephen Sondheim, music by Leonard Bernstein."
        }
    },
    {
      type        : {
        cover     : true,
        new       : false,
        coming    : false
      },
      url         : 'encanto',
      src         : '/assets/movies/encanto/encanto.jpg',
      srcBig      : '/assets/movies/encanto/encanto-big.jpeg',
      cover       : '/assets/movies/encanto/encanto-cover.jpg',
      titulo      : 'Encanto',
      texto       : 'Academy Award® Winner',
      logo        : '/assets/movies/encanto/encanto-logo.png',
      description : 'Walt Disney Animation Studios’ “Encanto," featuring all-new songs by award-winning songwriter Lin-Manuel Miranda, tells the tale of the Madrigals, an extraordinary family living in a magical house in the Colombian mountains. But when Mirabel, the only ordinary family member, discovers the magic surrounding their home is in danger, she may be her family’s last hope.',
      trailer     : 'https://www.disneyplus.com/en-gb/video/a4294756-e6a0-438d-8046-8d791b9169eb',
      details     :
        {
          duration         : '1h 52m',
          releaseDate      : '2021',
          genre            : [ 'Family', 'Fantasy', 'Animation', 'Musical' ],
          rating           : 6,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : "Walt Disney Animation Studios’ “Encanto” tells the tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel (voice of Stephanie Beatriz). But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family’s last hope. The film is directed by Jared Bush (co-director “Zootopia”) and Byron Howard (“Zootopia,” “Tangled”), co-directed by Charise Castro Smith (writer “The Death of Eva Sofia Valdez”), and produced by Yvett Merino and Clark Spencer; the screenplay is by Castro Smith and Bush. “Encanto” features original songs by Emmy®, GRAMMY® and Tony Award® winner Lin-Manuel Miranda (“Hamilton,” “Moana”); Germaine Franco (“Dora and the Lost City of Gold,” “Little,” “Tag”) composed the original score."
        }
    },
    {
      type        : {
        cover     : true,
        new       : false,
        coming    : true
      },
      date        : '8 June 2022',
      url         : 'ms-marvel',
      src         : '/assets/movies/ms-marvel/msmarvel.jpg',
      srcBig      : '/assets/movies/ms-marvel/msmarvel-big.jpg',
      height      : '/assets/movies/ms-marvel/msmarvel-height.jpg',
      cover       : '/assets/movies/ms-marvel/msmarvel-cover.jpg',
      titulo      : 'Ms. Marvel',
      texto       : 'Coming to Disney+ on 8 June',
      logo        : '/assets/movies/ms-marvel/msmarvel-logo.png',
      description : 'Marvel Studios’ “Ms. Marvel” is an original series that introduces Kamala Khan, a Muslim American teenager growing up in Jersey City. An avid gamer and a voracious fan-fiction scribe, Kamala is a Super Hero mega fan with an oversized imagination—particularly when it comes to Captain Marvel. Yet Kamala feels like she doesn’t fit in at school and sometimes even at home—that is, until she gets super powers like the heroes she’s always looked up to. Life gets better with super powers, right?',
      trailer     : 'https://www.disneyplus.com/en-gb/video/a4294756-e6a0-438d-8046-8d791b9169eb',
      details     :
        {
          releaseDate      : '2022',
          genre            : [ 'Coming of Age', 'Comedy', 'Super Hero', 'Action-Adventure' ],
          rating           : 6,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          season           : 1,
          subtitles        : false,
          audioDescription : false,
          photosensitive   : false,
          sinopsis         : 'Marvel Studios’ “Ms. Marvel” is an original series that introduces Kamala Khan, a Muslim American teenager growing up in Jersey City. An avid gamer and a voracious fan-fiction scribe, Kamala is a Super Hero mega fan with an oversized imagination—particularly when it comes to Captain Marvel. Yet Kamala feels like she doesn’t fit in at school and sometimes even at home—that is, until she gets super powers like the heroes she’s always looked up to. Life gets better with super powers, right?'
        }
    },
    {
      type        : {
        cover     : true,
        new       : false,
        coming    : false
      },
      url         : 'cruella',
      src         : '/assets/movies/cruella/cruella.jpg',
      srcBig      : '/assets/movies/cruella/cruella-big.jpg',
      cover       : '/assets/movies/cruella/cruella-cover.jpg',
      titulo      : 'Cruella',
      texto       : 'Academy Award® Winner',
      logo        : '/assets/movies/cruella/cruella-logo.png',
      description : 'Emma Stone stars in Disney’s “Cruella,” which explores the rebellious early days of one of cinema’s most notorious – and notoriously fashionable – villains, Cruella de Vil. Set in 1970s London amidst the punk rock revolution, the movie follows a young grifter named Estella and reveals the series of events that cause her to embrace her wicked side and become the raucous and revenge-bent Cruella.',
      trailer     : 'https://www.disneyplus.com/en-gb/video/5b8fc4c1-39e7-4197-84ab-7b32abc29fc1',
      details     :
        {
          duration         : '2h 16m',
          releaseDate      : '2021',
          genre            : [ 'Drama', 'Crime' ],
          rating           : 12,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : true,
          sinopsis         : "Academy Award® winner Emma Stone ('La La Land') stars in Disney’s 'Cruella', an all-new live-action feature film about the rebellious early days of one of cinemas most notorious – and notoriously fashionable – villains, the legendary Cruella de Vil. 'Cruella', which is set in 1970s London amidst the punk rock revolution, follows a young grifter named Estella, a clever and creative girl determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly high-and-mighty, played by two-time Oscar® winner Emma Thompson ('Howards End', 'Sense & Sensibility'). But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella. Disney’s 'Cruella' is directed by Craig Gillespie ('I Tonya') from a screenplay by Dana Fox and Tony McNamara, story by Aline Brosh McKenna, Kelly Marcel and Steve Zissis. It was produced by Andrew Gunn ('Freaky Friday'), Marc Platt ('Mary Poppins Returns') and Kristin Burr ('Christopher Robin'), with Emma Stone, Michelle Wright, Jared LeBoff and Glenn Close serving as executive producers. Two-time Oscar®- winning costume designer Jenny Beavan ('Mad Max: Fury Road', 'A Room with a View') creates the dazzling and imaginative costumes, which take on a life of their own."
        }
    },
    {
      type        : {
        cover     : true,
        new       : false,
        coming    : false
      },
      url         : 'the-simpsons',
      src         : '/assets/movies/the-simpsons/simpsons.jpg',
      cover       : '/assets/movies/the-simpsons/simpsons-cover.jpg',
      titulo      : 'The Simpsons',
      logo        : '/assets/movies/the-simpsons/simpsons-logo.png',
      logoCover   : '/assets/movies/the-simpsons/simpsons-logo-cover.png',
      description : 'This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.',
      details     :
        {
          duration         : '23m',
          releaseDate      : '1989 - 2021',
          genre            : [ 'Comedy', 'Animation' ],
          rating           : 12,
          starring         : [ 'Aria Brooks', 'Joshua Bassett', 'Michelle Federer', 'Rueby Wood', 'Norbert Leo Butz', 'Lisa Kudrow' ],
          season           : 33,
          subtitles        : true,
          audioDescription : false,
          photosensitive   : true,
          sinopsis         : "Winner of the 2019 Emmy® Award for Outstanding Animated Program, THE SIMPSONS continues to strike a chord with viewers for irreverently poking fun at anything and everything.  With its subversive humor and delightful wit, the series has made an indelible imprint on American pop culture, and its family members – Homer (Dan Castellaneta), Marge (Julie Kavner), Bart (Nancy Cartwright), Lisa (Yeardley Smith) and Maggie – are television icons.  Already the longest-running scripted series in television history, the Emmy® Award-, Annie Award- and Peabody Award-winning animated comedy has surpassed Gunsmoke’s record of the most episodes for a scripted primetime television series. THE SIMPSONS is a Gracie Films Production in association with 20th Century Fox Television. The series was created by Matt Groening and developed by James L. Brooks, Matt Groening and Sam Simon.  James L. Brooks and Matt Groening are executive producers. Al Jean and Matt Selman also serve as executive producers and the series’ showrunners."
        }
    },
    {
      type   : {
        cover  : false,
        new    : false,
        coming : true
      },
      date        : '27 May 2022',
      url         : 'obi-wan-kenobi',
      src         : '/assets/movies/obi-wan-kenobi/obiwan.jpg',
      srcBig      : '/assets/movies/obi-wan-kenobi/obiwan-big.jpg',
      height      : '/assets/movies/obi-wan-kenobi/obiwan-height.jpg',
      cover       : '/assets/movies/obi-wan-kenobi/obiwan-cover.jpg',
      titulo      : 'Obi-Wan Kenobi',
      logo        : '/assets/movies/obi-wan-kenobi/obiwan-logo.png',
      description : 'During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission.',
      trailer     : 'https://www.disneyplus.com/en-gb/video/097f8b6e-47c7-4f48-b6a7-e399481c60d1',
      details     :
        {
          duration         : '1m',
          releaseDate      : '2022',
          genre            : [ 'Science Fiction', 'Action-Adventure' ],
          rating           : 9,
          starring         : [ 'Ewan McGregor' ],
          subtitles        : false,
          audioDescription : false,
          photosensitive   : false,
          sinopsis         : "During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission."
        }
    },
    {
      type   : {
        cover  : false,
        new    : false,
        coming : true
      },
      url         : 'baymax',
      src         : '/assets/movies/baymax/baymax.jpg',
      srcBig      : '/assets/movies/baymax/baymax-big.jpg',
      height      : '/assets/movies/baymax/baymax-height.jpg',
      cover       : '/assets/movies/baymax/baymax-cover.jpg',
      titulo      : 'Baymax!',
      logo        : '/assets/movies/baymax/baymax-logo.png',
      description : 'Walt Disney Animation Studios’ "Baymax!" takes place in the fantastical city of San Fransokyo and features fan favorite healthcare bot, Baymax. Created by Don Hall, the Oscar®-winning director of “Big Hero 6,” “Baymax!” premieres on Disney+ summer 2022.',
      details     :
        {
          duration         : '1m',
          releaseDate      : '2021',
          genre            : [ 'Animation' ],
          rating           : 0,
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : 'Walt Disney Animation Studios’ "Baymax!" takes place in the fantastical city of San Fransokyo and features fan favorite healthcare bot, Baymax. Created by Don Hall, the Oscar®-winning director of “Big Hero 6,” “Baymax!” premieres on Disney+ summer 2022.'
        }
    },
    {
      type   : {
        cover  : false,
        new    : false,
        coming : true
      },
      date        : '12 May 2022',
      url         : 'sneakerella',
      src         : '/assets/movies/sneakerella/sneakerella.jpg',
      srcBig      : '/assets/movies/sneakerella/sneakerella-big.jpg',
      height      : '/assets/movies/sneakerella/sneakerella-height.jpg',
      cover       : '/assets/movies/sneakerella/sneakerella-cover.jpg',
      titulo      : 'Sneakerella',
      logo        : '/assets/movies/sneakerella/sneakerella-logo.png',
      description : 'In this high-energy, music-driven “Cinderella” story - El, an aspiring sneaker designer from Queens, works as a stock boy in a shoe store and hides his talent. Sparks fly after a chance encounter with Kira King, a Manhattan Princess Charming of sorts. With a nudge from his best friend and a sprinkle of magic, El finds the courage to lace up and dream big.',
      trailer     : 'https://www.disneyplus.com/en-gb/video/62f1234f-2dbc-4d42-9eb2-c7dc028c85e8',
      details     :
        {
          duration         : '1h 50m',
          releaseDate      : '2022',
          genre            : [ 'Romance', 'Family', 'Comedy', 'Musical' ],
          rating           : 6,
          starring         : [ 'Chosen Jacobs', 'Lexi Underwood', 'Devyn Nekoda' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : true,
          sinopsis         : 'Set in the avant-garde street-sneaker subculture of New York City, "Sneakerella" is a high-energy, music-driven movie that puts a contemporary twist on the “Cinderella” fairy tale. El is an aspiring sneaker designer from Queens who works as a stock boy in the shoe store that once belonged to his late mother. He hides his artistic talent from his overburdened stepfather and two mean-spirited stepbrothers who constantly thwart any opportunity that comes his way. When El meets Kira King, the fiercely independent daughter of legendary basketball star and sneaker tycoon Darius King, sparks fly as the two bond over their mutual affinity for sneakers. With a little nudge from his best friend and a sprinkle of Fairy Godfather magic, El finds the courage to use his talent to pursue his dream of becoming a "legit" sneaker designer in the industry. El is now ready to lace up and dream big.'
        }
    },
    {
      type   : {
        cover  : false,
        new    : false,
        coming : true
      },
      date        : '20 May 2022',
      url         : 'chip-n-dale',
      src         : '/assets/movies/chipndale/chipndale.jpg',
      srcBig      : '/assets/movies/chipndale/chipndale-big.jpg',
      height      : '/assets/movies/chipndale/chipndale-height.jpg',
      cover       : '/assets/movies/chipndale/chipndale-cover.jpg',
      titulo      : "Chip 'n Dale: Rescue Rangers",
      logo        : '/assets/movies/chipndale/chipndale-logo.png',
      description : 'Chip and Dale are living amongst cartoons and humans in modern-day Los Angeles, but their lives are quite different now. It has been decades since their successful television series was cancelled, and the former pals have gone their separate ways, so when a former cast mate mysteriously disappears, they must take on their Rescue Rangers detective personas to save their friend.',
      trailer     : 'https://www.disneyplus.com/en-gb/video/62f1234f-2dbc-4d42-9eb2-c7dc028c85e8',
      details     :
        {
          duration         : '1m',
          releaseDate      : '2022',
          genre            : [ 'Mystery', 'Comedy', 'Action-Adventure' ],
          rating           : 9,
          starring         : [ 'Chosen Jacobs', 'Lexi Underwood', 'Devyn Nekoda' ],
          subtitles        : false,
          audioDescription : false,
          photosensitive   : false,
          sinopsis         : 'A comeback 30 years in the making, “Chip ‘n Dale: Rescue Rangers” catches up with the former Disney Afternoon television stars in modern-day Los Angeles. In this hybrid live-action/CG animated action-comedy, Chip and Dale are living amongst cartoons and humans in modern-day Los Angeles, but their lives are quite different now. It has been decades since their successful television series was cancelled, and Chip (voice of John Mulaney) has succumbed to a life of suburban domesticity as an insurance salesman. Dale (voice of Andy Samberg), meanwhile, has had CGI surgery and works the nostalgia convention circuit, desperate to relive his glory days. When a former cast mate mysteriously disappears, Chip and Dale must repair their broken friendship and take on their Rescue Rangers detective personas once again to save their friend.'
        }
    },
    {
      type   : {
        cover  : false,
        new    : false,
        coming : false
      },
      url         : 'ice-age-adventures-of-buck-wild',
      src         : '/assets/movies/ice-age-buck-wild/buck.jpeg',
      srcBig      : '/assets/movies/ice-age-buck-wild/buck-big.jpg',
      cover       : '/assets/movies/ice-age-buck-wild/buck-cover.jpg',
      titulo      : "The Ice Age Adventures of Buck Wild",
      logo        : '/assets/movies/ice-age-buck-wild/buck-logo.png',
      description : 'Chip and Dale are living amongst cartoons and humans in modern-day Los Angeles, but their lives are quite different now. It has been decades since their successful television series was cancelled, and the former pals have gone their separate ways, so when a former cast mate mysteriously disappears, they must take on their Rescue Rangers detective personas to save their friend.',
      details     :
        {
          duration         : '1h 23m',
          releaseDate      : '2022',
          genre            : [ 'Family', 'Comedy', 'Animation', 'Action-Adventure' ],
          rating           : 6,
          starring         : [ 'Chosen Jacobs', 'Lexi Underwood', 'Devyn Nekoda' ],
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : '“The Ice Age Adventures of Buck Wild” continues the hilarious escapades of everyone’s favorite prehistoric mammals. Desperate for some distance from their older sister Ellie, the thrill-seeking possum brothers Crash and Eddie set out to find a place of their own, but quickly find themselves trapped in a massive cave underground. They are rescued by the one-eyed, adventure-loving, dinosaur-hunting weasel, Buck Wild, and together they must face the unruly dinosaurs who inhabit the Lost World.'
        }
    },
    {
      type   : {
        cover  : false,
        new    : false,
        coming : false
      },
      url         : 'ice-age-scrat-tales',
      src         : '/assets/movies/ice-age-scrat-tales/scrat.jpg',
      srcBig      : '/assets/movies/ice-age-scrat-tales/scrat-big.jpg',
      cover       : '/assets/movies/ice-age-scrat-tales/scrat-cover.jpg',
      titulo      : "Ice Age: Scrat Tales",
      logo        : '/assets/movies/ice-age-scrat-tales/scrat-logo.png',
      description : 'Six all-new animated “Ice Age” adventures starring Scrat, the hapless saber-toothed squirrel, who experiences the ups and downs of fatherhood, as he and the adorable, mischievous Baby Scrat, alternately bond with each other and battle for ownership of the highly treasured Acorn.',
      details     :
        {
          duration         : '3m',
          releaseDate      : '2022',
          genre            : [ 'Family', 'Comedy', 'Animation' ],
          rating           : 6,
          starring         : [ 'Chosen Jacobs', 'Lexi Underwood', 'Devyn Nekoda' ],
          season           : 1,
          subtitles        : true,
          audioDescription : true,
          photosensitive   : false,
          sinopsis         : 'Six all-new animated “Ice Age” adventures starring Scrat, the hapless saber-toothed squirrel, who experiences the ups and downs of fatherhood, as he and the adorable, mischievous Baby Scrat, alternately bond with each other and battle for ownership of the highly treasured Acorn.'
        }
    }
  ]
  
  cover   : ISlider = {
    tipo  : 'cover',
    cards : this.peliculas.filter( ( pelicula : IPeliculas ) => pelicula.type?.cover)
  }

  sliders    : ISlider[] = [
    {
      tipo   : 'slider',
      titulo : 'New to Disney+',
      cards  : [...this.peliculas].sort(( a , b ) => 0.5 - Math.random())
    },
    {
      tipo   : 'slider',
      titulo : 'Recommended For You',
      cards  : this.peliculas.filter( ( pelicula : IPeliculas ) => pelicula.type?.new)
    },
    {
      tipo   : 'slider',
      titulo : 'Coming Soon',
      height : true,
      cards  : this.peliculas.filter( ( pelicula : IPeliculas ) => pelicula.type?.coming)
    },
    {
      tipo   : 'slider',
      titulo : 'What to Watch Tonight',
      cards  : this.peliculas.filter( ( pelicula : IPeliculas ) => pelicula.type?.new)
    }
  ]

  constructor() { }
}
