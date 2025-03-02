export const characterData = [
  [
    {
      id: 'amun_001',
      name: 'Amun',
      title: 'The Fallen Star',
      role: {
        primary: 'Support',
        class: 'Enchanter',
      },
      difficulty: 'High',
      mobility: 'Poor',
      MP: 1000,
      description:
        'After being mortally wounded in the enlightenment war, Amun’s essence was transferred to a mortal body which has limited his control over the stars. He now seeks Emergate’s Heart to reforge his body and exact revenge on the human mages.',
      abilities: [
        {
          id: 'astrashift',
          name: 'Astra Shift',
          type: 'SS',
          damage: 220,
        },
        {
          id: 'DeathOrder',
          name: 'DeathOrder',
          type: 'AA',
          damage: 125,
        },
        {
          id: 'TheEnergyOfEmptiness',
          name: 'The Energy of Emptiness',
          type: 'Q',
          damage: 286,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740245569/image_261_1_rvn5tn.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740245549/Amun_2_f9f0ni.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740245569/image_261_1_rvn5tn.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Support',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Enchanter' },
              { label: 'MP', value: 1000 },
              { label: 'Difficulty', value: 'High' },
              { label: 'Mobility', value: 'Poor' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Astral Shift',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'Amun transforms into a spectral form and shifts through astral planes to evade enemy attacks.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740386384/Rectangle_3_2_rdemjn.webp',
        },
        {
          name: 'Death Order',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Amun calls upon dark forces to issue a deadly decree that smites his foes.',
          damage: 95,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740386384/Rectangle_3_2_rdemjn.webp',
        },
        {
          name: 'The Energy of Emptiness',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image1393_uyesc3.webp',
          description:
            'Amun unleashes a burst of void energy that drains strength from all in its path.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740386384/Rectangle_3_2_rdemjn.webp',
        },
      ],
    },
    {
      id: 'brienne_001',
      name: 'Brienne',
      title: 'The Loyal Hand',
      role: {
        primary: 'Damage Dealer',
        class: 'Juggernaut',
      },
      difficulty: 'Easy',
      mobility: 'Good',
      MP: 1000,
      description:
        'Perfection is the goal of existence. For Brienne, no one is more perfect than the King of Emergate whom she believes is the epitome of humankind. After earning the right to be called the Hand of the King, she will stop at nothing to bring glory to her king.',
      abilities: [
        {
          id: 'royalcharge',
          name: 'Royal Charge',
          type: 'SS',
          damage: 200,
        },
        {
          id: 'kingsjudgment',
          name: 'Kings Judgment',
          type: 'AA',
          damage: 140,
        },
        {
          id: 'imperialshield',
          name: 'Imperial Shield',
          type: 'Q',
          damage: 180,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/Brienne_1_su9kbw.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/BRIENNE_gwziss.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/Brienne_1_su9kbw.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Juggernaut' },
              { label: 'MP', value: 800 },
              { label: 'Difficulty', value: 'Easy' },
              { label: 'Mobility', value: 'Good' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Royal Charge',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Brienne surges forward with noble might, breaking enemy lines with a powerful charge.',
          damage: 100,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740398086/Rectangle_3_16_conz82.webp',
        },
        {
          name: "King's Judgment",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            "Delivering a decisive blow, Brienne enacts the king's command to smite her foes.",
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740398086/Rectangle_3_16_conz82.webp',
        },
        {
          name: 'Imperial Shield',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Brienne forms a protective barrier that reduces incoming damage while advancing.',
          damage: 70,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740398086/Rectangle_3_16_conz82.webp',
        },
      ],
    },
    {
      id: 'bjorn_001',
      name: 'Bjorn',
      title: 'The Enforcer',
      role: {
        primary: 'Damage Dealer',
        class: 'Juggernaut',
      },
      difficulty: 'Normal',
      mobility: 'Good',
      MP: 1000,
      description:
        'The law is absolute. Bjorn may be branded as a barbarian but her underlying sense of justice is as resolute as the strongest steel. Believing that the world has descended into chaos, he plans to restore the world to order by taking down the mages of Emergate first.',
      abilities: [
        {
          id: 'savagestrike',
          name: 'Savage Strike',
          type: 'SS',
          damage: 230,
        },
        {
          id: 'justicecleave',
          name: 'Justice Cleave',
          type: 'AA',
          damage: 150,
        },
        {
          id: 'orderrestored',
          name: 'Order Restored',
          type: 'Q',
          damage: 170,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160257/BJORN_xxplme.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160257/BJORN_xxplme.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160257/BJORN_xxplme.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Juggernaut' },
              { label: 'MP', value: 800 },
              { label: 'Difficulty', value: 'Normal' },
              { label: 'Mobility', value: 'Good' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Savage Strike',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Bjorn delivers a brutal melee attack that cleaves through multiple enemies.',
          damage: 95,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_3_jtkalb.webp',
        },
        {
          name: 'Justice Cleave',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'A wide arc swing that enforces his sense of justice upon his foes.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_3_jtkalb.webp',
        },
        {
          name: 'Order Restored',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Bjorn channels his inner resolve to restore order and weaken enemy defenses.',
          damage: 75,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_3_jtkalb.webp',
        },
      ],
    },
    {
      id: 'blazy_001',
      name: 'Blazy',
      title: 'Hellfire Unleashed',
      role: {
        primary: 'Damage Dealer',
        class: 'Battlemage',
      },
      difficulty: 'Hard',
      mobility: 'Normal',
      MP: 1000,
      description:
        'Unable to control her fiery spirit, the Elders of Draconis sent Blazy away on a quest to control her powers. However, Blazy isn’t the type to keep his flames in check. Instead, she decided to participate in the Emergate Arena where she can unleash hellfire on those who stand in her way.',
      abilities: [
        {
          id: 'infernoburst',
          name: 'Inferno Burst',
          type: 'SS',
          damage: 240,
        },
        {
          id: 'flameworkhip',
          name: 'Flame Whip',
          type: 'AA',
          damage: 160,
        },
        {
          id: 'hellfireeruption',
          name: 'Hellfire Eruption',
          type: 'Q',
          damage: 210,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160451/BLAIZY_1_simi1s.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160451/BLAIZY_buj1sx.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160451/BLAIZY_1_simi1s.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Battlemage' },
              { label: 'MP', value: 1000 },
              { label: 'Difficulty', value: 'Hard' },
              { label: 'Mobility', value: 'Normal' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Inferno Burst',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Blazy releases a sudden burst of flames, engulfing nearby enemies in fire.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/Rectangle_3_mxdrdh.webp',
        },
        {
          name: 'Flame Whip',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'A swift lash of flame that strikes and burns enemies from a distance.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/Rectangle_3_mxdrdh.webp',
        },
        {
          name: 'Hellfire Eruption',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Blazy summons a massive eruption of hellfire, scorching everything in its path.',
          damage: 95,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/Rectangle_3_mxdrdh.webp',
        },
      ],
    },
    {
      id: 'callie_001',
      name: 'Callie',
      title: 'The Waterborne Visionary',
      role: {
        primary: 'Support',
        class: 'Enchanter',
      },
      difficulty: 'Normal',
      mobility: 'Poor',
      MP: 1000,
      description:
        'Born from the swamplands after a young woman drowned in its poisoned waters, the consciousness of the waters took her form and gave itself the name – Callie. This creature inherits the woman’s dreams to bring a world without prejudice for all creatures, regardless of shape or form.',
      abilities: [
        {
          id: 'swampsembrace',
          name: "Swamp's Embrace",
          type: 'SS',
          damage: 200,
        },
        {
          id: 'toxicsurge',
          name: 'Toxic Surge',
          type: 'AA',
          damage: 150,
        },
        {
          id: 'marshmirage',
          name: 'Marsh Mirage',
          type: 'Q',
          damage: 180,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160456/Hero_1_zn1ghm.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160452/CALLIE_ebfntj.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160456/Hero_1_zn1ghm.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Support',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Enchanter' },
              { label: 'MP', value: 1000 },
              { label: 'Difficulty', value: 'Normal' },
              { label: 'Mobility', value: 'Poor' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: "Swamp's Embrace",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Callie harnesses the power of the swamp to ensnare and damage her enemies.',
          damage: 70,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396553/Rectangle_3_10_nvqzve.webp',
        },
        {
          name: 'Toxic Surge',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'A surge of poisonous energy erupts from Callie, weakening and damaging foes.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396553/Rectangle_3_10_nvqzve.webp',
        },
        {
          name: 'Marsh Mirage',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Callie creates deceptive illusions from the marsh to confuse her adversaries.',
          damage: 75,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396553/Rectangle_3_10_nvqzve.webp',
        },
      ],
    },
    {
      id: 'craig_001',
      name: 'Craig',
      title: 'The Primal Titan',
      role: {
        primary: 'Damage Dealer',
        class: 'Juggernaut',
      },
      difficulty: 'Easy',
      mobility: 'Good',
      MP: 1046,
      description:
        'When the world took form, the gods made every manner of being. As the eons passed, only a titan known as Craig remained. It took the form of the world in its primal form and watched as the lands, seas, and skies reformed. Now, it urges to return everything to its original form.',
      abilities: [
        {
          id: 'primalsmash',
          name: 'Primal Smash',
          type: 'SS',
          damage: 250,
        },
        {
          id: 'earthsreclamation',
          name: "Earth's Reclamation",
          type: 'AA',
          damage: 200,
        },
        {
          id: 'titansroar',
          name: "Titan's Roar",
          type: 'Q',
          damage: 190,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160372/KRAG_1_cnmy9b.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160371/KRAG_fccfjo.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160372/KRAG_1_cnmy9b.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Juggernaut' },
              { label: 'MP', value: 800 },
              { label: 'Difficulty', value: 'Easy' },
              { label: 'Mobility', value: 'Good' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Primal Smash',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/primal_smash.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/primal_smash_active.webp',
          description:
            'Craig slams the ground with raw power, sending shockwaves that damage all nearby foes.',
          damage: 100,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/primal_smash_img.webp',
        },
        {
          name: "Earth's Reclamation",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/earths_reclamation.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/earths_reclamation_active.webp',
          description:
            'Craig calls upon the power of the earth to reclaim lost ground and crush his enemies.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/earths_reclamation_img.webp',
        },
        {
          name: "Titan's Roar",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/titans_roar.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/titans_roar_active.webp',
          description:
            'With a mighty roar, Craig intimidates his foes, reducing their combat effectiveness.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/titans_roar_img.webp',
        },
      ],
    },
    {
      id: 'druid_001',
      name: 'Druid',
      title: 'The Nature’s Wrath',
      role: {
        primary: 'Support',
        class: 'Enchanter',
      },
      difficulty: 'Normal',
      mobility: 'Poor',
      MP: 1000,
      description:
        'The swamps have swallowed countless souls , and among the most ancient ones emerged a being embodying the essence of life and death. Travelers call it the Druid who delivers nature’s wrath upon its enemies. It now acts to devour the energy it senses sealed in Emergate’s Heart.',
      abilities: [
        {
          id: 'natureswrath',
          name: "Nature's Wrath",
          type: 'SS',
          damage: 220,
        },
        {
          id: 'lifedrain',
          name: 'Life Drain',
          type: 'AA',
          damage: 180,
        },
        {
          id: 'forestsvengeance',
          name: "Forest's Vengeance",
          type: 'Q',
          damage: 210,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160246/DRUID_1_sxtwnz.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740917657/DRUID_3_pshgqy.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160246/DRUID_1_sxtwnz.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Support',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Enchanter' },
              { label: 'MP', value: 1000 },
              { label: 'Difficulty', value: 'Normal' },
              { label: 'Mobility', value: 'Poor' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: "Nature's Wrath",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'The Druid summons the fury of nature to launch a devastating attack.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_5_nhcioc.webp',
        },
        {
          name: 'Life Drain',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'The Druid siphons life from his enemies to heal himself during battle.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_5_nhcioc.webp',
        },
        {
          name: "Forest's Vengeance",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'The spirit of the forest rises to avenge nature, unleashing relentless force.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_5_nhcioc.webp',
        },
      ],
    },
    {
      id: 'dr_lutz_001',
      name: 'Dr. Lutz',
      title: 'The Mad Scientist',
      role: {
        primary: 'Damage Dealer',
        class: 'Artillery',
      },
      difficulty: 'Hard',
      mobility: 'Poor',
      MP: 1000,
      description:
        'Even the other scientists in Emergate stay away from Dr. Lutz. His passion for weaponry and explosions makes him a huge work hazard. Only the King of Emergate appreciates his inventions and has permitted him to prove that his weapons are powerful.',
      abilities: [
        {
          id: 'explosivecharge',
          name: 'Explosive Charge',
          type: 'SS',
          damage: 260,
        },
        {
          id: 'rocketbarrage',
          name: 'Rocket Barrage',
          type: 'AA',
          damage: 240,
        },
        {
          id: 'detonationprotocol',
          name: 'Detonation Protocol',
          type: 'Q',
          damage: 280,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160457/LUTZ_1_tvcmnw.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160457/LUTZ_pc28er.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160457/LUTZ_1_tvcmnw.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Artillery' },
              { label: 'MP', value: 600 },
              { label: 'Difficulty', value: 'Hard' },
              { label: 'Mobility', value: 'Poor' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Explosive Charge',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Dr. Lutz deploys a volatile explosive charge that detonates on contact.',
          damage: 110,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396837/Rectangle_3_11_ycn5go.webp',
        },
        {
          name: 'Rocket Barrage',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'A salvo of rockets rains down on enemies, overwhelming them with explosive force.',
          damage: 105,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396837/Rectangle_3_11_ycn5go.webp',
        },
        {
          name: 'Detonation Protocol',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Dr. Lutz triggers a chain reaction, causing a massive explosion in a wide area.',
          damage: 115,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396837/Rectangle_3_11_ycn5go.webp',
        },
      ],
    },
    {
      id: 'frigard_001',
      name: 'Frigard',
      title: 'The Ice Mage',
      role: {
        primary: 'Damage Dealer',
        class: 'Battlemage',
      },
      difficulty: 'Easy',
      mobility: 'Good',
      MP: 1000,
      description:
        'The Frozen Lands is home to Frigard, an extremely talented ice mage whose powers can bring upon great devastation. After the Progenitor – Vladislav – massacred his entire household, he now seeks the power to wipe the bloodborne off of existence.',
      abilities: [
        {
          id: 'frostbite',
          name: 'Frostbite',
          type: 'SS',
          damage: 210,
        },
        {
          id: 'glacialshard',
          name: 'Glacial Shard',
          type: 'AA',
          damage: 190,
        },
        {
          id: 'blizzardfury',
          name: 'Blizzard Fury',
          type: 'Q',
          damage: 230,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160454/FRIGARD_1_acxal4.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160454/FRIGARD_ouls2x.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160454/FRIGARD_1_acxal4.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Battlemage' },
              { label: 'MP', value: 1000 },
              { label: 'Difficulty', value: 'Easy' },
              { label: 'Mobility', value: 'Good' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Frostbite',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Frigard inflicts a chilling bite that slows and damages his enemies.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397663/Rectangle_3_13_tgyqdd.webp',
        },
        {
          name: 'Glacial Shard',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'A sharp shard of ice is hurled toward foes, piercing through defenses.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397663/Rectangle_3_13_tgyqdd.webp',
        },
        {
          name: 'Blizzard Fury',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Frigard summons a ferocious blizzard that engulfs the battlefield in ice.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397663/Rectangle_3_13_tgyqdd.webp',
        },
      ],
    },
    {
      id: 'gail_001',
      name: 'Gail',
      title: 'The Wind Wanderer',
      role: {
        primary: 'Disruptor',
        class: 'Disruptor',
      },
      difficulty: 'Hard',
      mobility: 'Good',
      MP: 1000,
      description:
        'The Floating Isles is home to Gail, an extremely talented wind mage whose powers can blow away even the heaviest boulder. After growing up with such power and respect from his peers, she seeks to see whether there is more to her existence by traveling the lands below.',
      abilities: [
        {
          id: 'galeforce',
          name: 'Gale Force',
          type: 'SS',
          damage: 200,
        },
        {
          id: 'cycloneburst',
          name: 'Cyclone Burst',
          type: 'AA',
          damage: 160,
        },
        {
          id: 'tempestcall',
          name: 'Tempest Call',
          type: 'Q',
          damage: 210,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160455/GAIL_1_litgen.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160455/GAIL_koymij.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160455/GAIL_1_litgen.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Disruptor',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Disruptor' },
              { label: 'MP', value: 900 },
              { label: 'Difficulty', value: 'Hard' },
              { label: 'Mobility', value: 'Good' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Gale Force',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'Gail unleashes a powerful gust of wind that knocks enemies off balance.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396216/Rectangle_3_9_lqett0.webp',
        },
        {
          name: 'Cyclone Burst',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'A swirling burst of wind disorients enemies caught in its path.',
          damage: 75,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396216/Rectangle_3_9_lqett0.webp',
        },
        {
          name: 'Tempest Call',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Gail summons a violent storm that bombards enemies with fierce winds.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396216/Rectangle_3_9_lqett0.webp',
        },
      ],
    },
    {
      id: 'jean_001',
      name: 'Jean',
      title: 'The Ethereal Mage',
      role: {
        primary: 'Disruptor',
        class: 'Disruptor',
      },
      difficulty: 'Hard',
      mobility: 'Poor',
      MP: 1000,
      description:
        'The being known as Jean comes from the ethereal realms where his timeless existence has helped him hone the ancient magics of the multiverse. He has come to this world to seek Emergate’s Heart to take his magical power to an entirely new height.',
      abilities: [
        {
          id: 'etherealshift',
          name: 'Ethereal Shift',
          type: 'SS',
          damage: 190,
        },
        {
          id: 'mysticsurge',
          name: 'Mystic Surge',
          type: 'AA',
          damage: 170,
        },
        {
          id: 'arcaneeruption',
          name: 'Arcane Eruption',
          type: 'Q',
          damage: 220,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/JEAN_1_ixngfc.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160371/JEAN_docnpy.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/JEAN_1_ixngfc.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Disruptor',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Disruptor' },
              { label: 'MP', value: 900 },
              { label: 'Difficulty', value: 'Hard' },
              { label: 'Mobility', value: 'Poor' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Ethereal Shift',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'Jean phases into the ethereal plane to dodge incoming attacks.',
          damage: 70,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_4_yttns1.webp',
        },
        {
          name: 'Mystic Surge',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Jean channels an ancient surge of magic to overwhelm his enemies.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_4_yttns1.webp',
        },
        {
          name: 'Arcane Eruption',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'A torrent of arcane energy explodes from Jean’s core, battering all nearby foes.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740394943/Rectangle_3_4_yttns1.webp',
        },
      ],
    },
    {
      id: 'karas_001',
      name: 'Karas',
      title: 'The Dark Arcanist',
      role: {
        primary: 'Disruptor',
        class: 'Disruptor',
      },
      difficulty: 'Very Hard',
      mobility: 'Good',
      MP: 1000,
      description:
        'Karas is an Arcanist from Emergate, adept in dark magic. In his research to achieve immortality through dark magic, his mortal form is twisted beyond recognition. The King of Emergate turns a blind eye on his research knowing he can benefit from it should it succeed.',
      abilities: [
        {
          id: 'shadowveil',
          name: 'Shadow Veil',
          type: 'SS',
          damage: 180,
        },
        {
          id: 'darkincantation',
          name: 'Dark Incantation',
          type: 'AA',
          damage: 200,
        },
        {
          id: 'netherblast',
          name: 'Nether Blast',
          type: 'Q',
          damage: 240,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160230/KARAS_q0e6hs.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160230/KARAS_q0e6hs.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160230/KARAS_q0e6hs.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Disruptor',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Disruptor' },
              { label: 'MP', value: 900 },
              { label: 'Difficulty', value: 'Very Hard' },
              { label: 'Mobility', value: 'Good' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Shadow Veil',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'Karas cloaks himself in darkness, making him nearly invisible to enemies.',
          damage: 75,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395937/Rectangle_3_8_fsdxej.webp',
        },
        {
          name: 'Dark Incantation',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Karas invokes forbidden magic to curse and weaken his adversaries.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395937/Rectangle_3_8_fsdxej.webp',
        },
        {
          name: 'Nether Blast',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'A concentrated blast of dark energy erupts from Karas, devastating all in its path.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395937/Rectangle_3_8_fsdxej.webp',
        },
      ],
    },
    {
      id: 'moira_001',
      name: 'Moira',
      title: 'The Awakened Machine',
      role: {
        primary: 'Damage Dealer',
        class: 'Battlemage',
      },
      difficulty: 'Very Hard',
      mobility: 'Poor',
      MP: 1000,
      description:
        'A powerful mage once created a machine using a fragment of Emergate’s Heart as its core. The mage called its creation Moira. What the mage did not account the immense magical energy caused the machine to gain a consciousness of its own that now aims to seek the meaning of its existence.',
      abilities: [
        {
          id: 'technosurge',
          name: 'Techno Surge',
          type: 'SS',
          damage: 220,
        },
        {
          id: 'mechanicalonslaught',
          name: 'Mechanical Onslaught',
          type: 'AA',
          damage: 230,
        },
        {
          id: 'energyoverload',
          name: 'Energy Overload',
          type: 'Q',
          damage: 250,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160458/MOIRA_1_dhacg5.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160459/MOIRA_hptj3k.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160458/MOIRA_1_dhacg5.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Battlemage' },
              { label: 'MP', value: 1000 },
              { label: 'Difficulty', value: 'Very Hard' },
              { label: 'Mobility', value: 'Poor' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Techno Surge',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'Moira blends magic and machinery to unleash a surge of electrifying power.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395800/Rectangle_3_7_io04aj.webp',
        },
        {
          name: 'Mechanical Onslaught',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'A relentless barrage of mechanical fury overwhelms Moira’s enemies.',
          damage: 95,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395800/Rectangle_3_7_io04aj.webp',
        },
        {
          name: 'Energy Overload',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Moira unleashes an overwhelming burst of energy that cripples her foes.',
          damage: 100,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395800/Rectangle_3_7_io04aj.webp',
        },
      ],
    },
    {
      id: 'ronin_001',
      name: 'Ronin',
      title: 'The Vengeful Ronin',
      role: {
        primary: 'Assassin',
        class: 'Assassin',
      },
      difficulty: 'High',
      mobility: 'Great',
      MP: 1000,
      description:
        'The Ronin is simply a shell of the samurai that once lived in this body. After he was helplessly forced to watch his lord get brutally slain by a powerful mage, a demon consumed his mind and body. In exchange, the demon now fulfills the samurai’s last wish to get revenge on the mage.',
      abilities: [
        {
          id: 'ghostslash',
          name: 'Ghost Slash',
          type: 'SS',
          damage: 240,
        },
        {
          id: 'demonsembrace',
          name: "Demon's Embrace",
          type: 'AA',
          damage: 210,
        },
        {
          id: 'silentretribution',
          name: 'Silent Retribution',
          type: 'Q',
          damage: 200,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160462/RONIN_kibnxo.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160459/RONIN_1_ejhaez.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160462/RONIN_kibnxo.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Assassin',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Assassin' },
              { label: 'MP', value: 700 },
              { label: 'Difficulty', value: 'High' },
              { label: 'Mobility', value: 'Great' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Ghost Slash',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/ghost_slash.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/ghost_slash_active.webp',
          description:
            'Ronin strikes with a phantom blade that cuts through enemy defenses.',
          damage: 95,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/ghost_slash_img.webp',
        },
        {
          name: "Demon's Embrace",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/demons_embrace.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/demons_embrace_active.webp',
          description:
            'Ronin channels dark energy to empower his strikes with demonic force.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/demons_embrace_img.webp',
        },
        {
          name: 'Silent Retribution',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/silent_retribution.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/silent_retribution_active.webp',
          description:
            'With lethal precision, Ronin delivers a silent, deadly strike.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/silent_retribution_img.webp',
        },
      ],
    },
    {
      id: 'tara_001',
      name: 'Tara',
      title: 'The Survivor',
      role: {
        primary: 'Assassin',
        class: 'Assassin',
      },
      difficulty: 'Easy',
      mobility: 'Great',
      MP: 1000,
      description:
        'Growing up in the slums of Emergate , Tara knows how to survive in a harsh environment. Her upbringing has made her fierce. She will do everything in her power to survive and it seems the Emergate Arena is just the place to secure her future and well-being in this world.',
      abilities: [
        {
          id: 'streetambush',
          name: 'Street Ambush',
          type: 'SS',
          damage: 200,
        },
        {
          id: 'urbanevasion',
          name: 'Urban Evasion',
          type: 'AA',
          damage: 170,
        },
        {
          id: 'survivorsfury',
          name: "Survivor's Fury",
          type: 'Q',
          damage: 210,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160461/TARA_1_l4zw4f.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160462/TARA_aipn8i.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160461/TARA_1_l4zw4f.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Assassin',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Assassin' },
              { label: 'MP', value: 700 },
              { label: 'Difficulty', value: 'Easy' },
              { label: 'Mobility', value: 'Great' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Street Ambush',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Tara launches a surprise attack from the urban shadows.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397168/Rectangle_3_12_rmmvkj.webp',
        },
        {
          name: 'Urban Evasion',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Tara quickly evades incoming attacks by blending into her surroundings.',
          damage: 75,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397168/Rectangle_3_12_rmmvkj.webp',
        },
        {
          name: "Survivor's Fury",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Drawing on her harsh past, Tara unleashes a furious assault on her enemies.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397168/Rectangle_3_12_rmmvkj.webp',
        },
      ],
    },
    {
      id: 'true_shot_001',
      name: 'TrueShot',
      title: "The Forest's Champion",
      role: {
        primary: 'Assassin',
        class: 'Assassin',
      },
      difficulty: 'Normal',
      mobility: 'Great',
      MP: 1000,
      description:
        'There is not much known about the inhabitants of the Mythical Forest. Those foolish enough to enter the forest always get found with an arrow in between their eyes. However, as the forest begins to die, it is up to one of its champions to find a magical source that will nourish the trees.',
      abilities: [
        {
          id: 'arrowoffate',
          name: 'Arrow of Fate',
          type: 'SS',
          damage: 210,
        },
        {
          id: 'forestswrath',
          name: "Forest's Wrath",
          type: 'AA',
          damage: 190,
        },
        {
          id: 'snipestrike',
          name: 'Snipe Strike',
          type: 'Q',
          damage: 220,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/ARCHER_1_dwe2sq.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160369/ARCHER_vbyufk.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160370/ARCHER_1_dwe2sq.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Assassin',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Assassin' },
              { label: 'MP', value: 700 },
              { label: 'Difficulty', value: 'Normal' },
              { label: 'Mobility', value: 'Great' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Arrow of Fate',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'True Shot fires a mystical arrow that homes in on its destined target.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396837/Rectangle_3_11_ycn5go.webp',
        },
        {
          name: "Forest's Wrath",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Channeling the dying forest’s power, True Shot inflicts nature’s retribution.',
          damage: 80,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396837/Rectangle_3_11_ycn5go.webp',
        },
        {
          name: 'Snipe Strike',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'From a distance, True Shot delivers a precise and deadly snipe attack.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740396837/Rectangle_3_11_ycn5go.webp',
        },
      ],
    },
    {
      id: 'vega_001',
      name: 'Vega',
      title: 'The Harbinger',
      role: {
        primary: 'Assassin',
        class: 'Assassin',
      },
      difficulty: 'Very Easy',
      mobility: 'Great',
      MP: 1000,
      description:
        'Some worship The God of Death and the strongest among them get chosen as harbingers to reap the souls of the living to give as offerings to their lord. It was only recently that Vega was chosen to be the harbinger but it was obvious that he was leagues stronger than the others.',
      abilities: [
        {
          id: 'reaperscythe',
          name: "Reaper's Scythe",
          type: 'SS',
          damage: 250,
        },
        {
          id: 'soulharvest',
          name: 'Soul Harvest',
          type: 'AA',
          damage: 230,
        },
        {
          id: 'deathsembrace',
          name: "Death's Embrace",
          type: 'Q',
          damage: 240,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160230/VEGA_q8sgfs.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160230/VEGA_q8sgfs.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160230/VEGA_q8sgfs.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Assassin',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Assassin' },
              { label: 'MP', value: 700 },
              { label: 'Difficulty', value: 'Very Easy' },
              { label: 'Mobility', value: 'Great' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: "Reaper's Scythe",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image_139_1_ojcjhs.webp',
          description:
            'Wielding a spectral scythe, Vega cleaves through his foes with deadly precision.',
          damage: 100,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397877/Rectangle_3_14_u9vraj.webp',
        },
        {
          name: 'Soul Harvest',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Vega siphons the life force from his enemies to replenish his own strength.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397877/Rectangle_3_14_u9vraj.webp',
        },
        {
          name: "Death's Embrace",
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Vega surrounds himself with a shroud of death that empowers his next attack.',
          damage: 95,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740397877/Rectangle_3_14_u9vraj.webp',
        },
      ],
    },
    {
      id: 'vladislav_001',
      name: 'Vladislav',
      title: 'The Bloodborne Progenitor',
      role: {
        primary: 'Damage Dealer',
        class: 'Juggernaut',
      },
      difficulty: 'Very Easy',
      mobility: 'Great',
      MP: 1000,
      description:
        'Vladislav is the progenitor of the bloodborn. For millennia, he has feasted upon the blood of every mortal. However, the taste has now grown dull and the joy of watching these mortals beg for mercy has faded. He now aims to fuel his lifeforce by consuming Emergate’s Heart.',
      abilities: [
        {
          id: 'bloodfeast',
          name: 'Blood Feast',
          type: 'SS',
          damage: 260,
        },
        {
          id: 'crimsonrampage',
          name: 'Crimson Rampage',
          type: 'AA',
          damage: 250,
        },
        {
          id: 'heartofdarkness',
          name: 'Heart of Darkness',
          type: 'Q',
          damage: 280,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160462/VLADISLAV_1_awiznl.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160462/VLADISLAV_dungnx.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740160462/VLADISLAV_1_awiznl.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Juggernaut' },
              { label: 'MP', value: 800 },
              { label: 'Difficulty', value: 'Very Easy' },
              { label: 'Mobility', value: 'Great' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Blood Feast',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'Vladislav drains the vitality of his enemies by feasting on their blood.',
          damage: 105,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395467/image_151_tapj5y.webp',
        },
        {
          name: 'Crimson Rampage',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Unleashing savage brutality, Vladislav rampages through enemy ranks.',
          damage: 100,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395467/image_151_tapj5y.webp',
        },
        {
          name: 'Heart of Darkness',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image1393_uyesc3.webp',
          description:
            'Vladislav channels the abyss within, releasing devastating dark energy.',
          damage: 110,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1740395467/image_151_tapj5y.webp',
        },
      ],
    },
    {
      id: 'zap_001',
      name: 'Zap',
      title: "The Thunder's Offspring",
      role: {
        primary: 'Damage Dealer',
        class: 'Battlemage',
      },
      difficulty: 'Easy',
      mobility: 'Great',
      MP: 1000,
      description:
        'Born with the extraordinary ability to manipulate lightning, Zap believes he is the direct offspring of the God of Thunder. Like a true rebellious son, he now aims to attract his “father’s” attention by participating in the Emergate Arena to showcase the full extent of his powers.',
      abilities: [
        {
          id: 'lightningdash',
          name: 'Lightning Dash',
          type: 'SS',
          damage: 210,
        },
        {
          id: 'icepeaks',
          name: 'Ice Peaks',
          type: 'AA',
          damage: 180,
        },
        {
          id: 'icestorms',
          name: 'Ice Storms',
          type: 'Q',
          damage: 200,
        },
      ],
      visuals: {
        background_image: {
          mobile: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_z0ukji.webp',
          desktop: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173134/Hero_3_dkigsu.webp',
          tab: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1732280870/image_19_z0ukji.webp',
        },
        theme: '',
        UI_elements: {
          badge: 'Damage Dealer',
          info_box: {
            color: '',
            content: [
              { label: 'Game Role', value: 'Battlemage' },
              { label: 'MP', value: 1000 },
              { label: 'Difficulty', value: 'Easy' },
              { label: 'Mobility', value: 'Great' },
            ],
          },
        },
      },
      ability_details: [
        {
          name: 'Lightning Dash',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image1393_uyesc3.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173114/image1393_uyesc3.webp',
          description:
            'Zap transforms into a ball of lightning, dashing toward a target while becoming invulnerable and damaging enemies in his path.',
          damage: 90,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/Rectangle_3_mxdrdh.webp',
        },
        {
          name: 'Ice Peaks',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173120/image_139_upbgkg.webp',
          description:
            'Creates sharp ice peaks that damage and slow enemies in their tracks.',
          damage: 75,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/Rectangle_3_mxdrdh.webp',
        },
        {
          name: 'Ice Storms',
          icon: 'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          iconActive:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173123/image_139_1_ojcjhs.webp',
          description:
            'Summons a devastating ice storm that freezes enemies in its wake.',
          damage: 85,
          image:
            'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1718279898/Rectangle_3_mxdrdh.webp',
        },
      ],
    },
  ],
]
