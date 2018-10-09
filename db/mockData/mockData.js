const cleanedCarData = [{
  make_name: 'ferrari',
  manufacturer: 'ferrari',
  models: [
    {
      model_name: '458 Italia',
      body: 'Coupe',
      engine: '8',
      top_speed: null,
      horse_power: '578',
      transmission: '7-speed automatic'
    },
    {
      model_name: '458 Spider',
      body: 'Roadster ',
      engine: null,
      top_speed: null,
      horse_power: null,
      transmission: '7-speed automatic'
    },
    {
      model_name: 'California V8',
      body: 'Coupe',
      engine: null,
      top_speed: null,
      horse_power: null,
      transmission: '6-speed manual '
    },
    {
      model_name: 'FF HELE V12',
      body: 'Coupe',
      engine: null,
      top_speed: null,
      horse_power: null,
      transmission: '6-speed manual '
    },
    {
      model_name: '458 Italia Convertible',
      body: 'Convertible',
      engine: '8',
      top_speed: null,
      horse_power: '578',
      transmission: '7-speed automated manual'
    },
    {
      model_name: '458 Italia Coupe',
      body: 'Coupe',
      engine: '8',
      top_speed: null,
      horse_power: '578',
      transmission: '7-speed automated manual'
    },
    {
      model_name: '599 GTB Fiorano',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '619',
      transmission: 'Manual'
    },
    {
      model_name: '599 GTO',
      body: 'Coupe',
      engine: '12',
      top_speed: '335',
      horse_power: '661',
      transmission: 'Manual'
    },
    {
      model_name: 'California ',
      body: 'Convertible',
      engine: '8',
      top_speed: null,
      horse_power: '466',
      transmission: 'Manual'
    },
    {
      model_name: 'FF ',
      body: 'Hatchback',
      engine: '12',
      top_speed: null,
      horse_power: '660',
      transmission: '7-speed automated manual'
    },
    {
      model_name: '458 Italia ',
      body: 'Coupe',
      engine: '8',
      top_speed: null,
      horse_power: '578',
      transmission: 'Manual'
    },
    {
      model_name: '599 GTB Fiorano',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '619',
      transmission: 'Manual'
    },
    {
      model_name: '599 GTO',
      body: 'Coupe',
      engine: '12',
      top_speed: '335',
      horse_power: '661',
      transmission: 'Manual'
    },
    {
      model_name: 'California ',
      body: 'Convertible',
      engine: '8',
      top_speed: null,
      horse_power: '466',
      transmission: 'Manual'
    },
    {
      model_name: '458 Italia ',
      body: 'Coupe',
      engine: '8',
      top_speed: null,
      horse_power: '578',
      transmission: 'Manual'
    },
    {
      model_name: '599 GTB Fiorano',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '619',
      transmission: 'Manual'
    },
    {
      model_name: '612 Scaglietti ',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '539',
      transmission: 'Manual'
    },
    {
      model_name: 'California ',
      body: 'Convertible',
      engine: '8',
      top_speed: null,
      horse_power: '466',
      transmission: 'Manual'
    },
    {
      model_name: '456M GT',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '442',
      transmission: null
    },
    {
      model_name: '599 GTB Fiorano',
      body: 'Coupe',
      engine: '12',
      top_speed: '331',
      horse_power: '620',
      transmission: 'Manual'
    },
    {
      model_name: '599 GTB Fiorano Automatic',
      body: 'Coupe',
      engine: '12',
      top_speed: '331',
      horse_power: '620',
      transmission: 'Automatic'
    },
    {
      model_name: '612 Scaglietti',
      body: 'Coupe',
      engine: '12',
      top_speed: '320',
      horse_power: '540',
      transmission: 'Manual'
    },
    {
      model_name: 'California ',
      body: 'Convertible',
      engine: '8',
      top_speed: null,
      horse_power: '466',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 ',
      body: 'Coupe',
      engine: '8',
      top_speed: '316',
      horse_power: '490',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 Automatic',
      body: 'Coupe',
      engine: '8',
      top_speed: '316',
      horse_power: '490',
      transmission: 'Automatic'
    },
    {
      model_name: 'F430 Scuderia',
      body: 'Coupe',
      engine: '8',
      top_speed: '320',
      horse_power: '510',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 Spider',
      body: 'Convertible',
      engine: '8',
      top_speed: '311',
      horse_power: '490',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 Spider Automatic',
      body: 'Convertible',
      engine: '8',
      top_speed: '311',
      horse_power: '490',
      transmission: 'Automatic'
    },
    {
      model_name: '360 Modena',
      body: 'Coupe',
      engine: null,
      top_speed: null,
      horse_power: null,
      transmission: 'Manual'
    },
    {
      model_name: '360 Modena Spyder',
      body: 'Convertible',
      engine: null,
      top_speed: '291',
      horse_power: null,
      transmission: 'Manual'
    },
    {
      model_name: '360 Spider',
      body: 'Convertible',
      engine: null,
      top_speed: '293',
      horse_power: null,
      transmission: 'Manual'
    },
    {
      model_name: '360 Spider F1',
      body: 'Convertible',
      engine: null,
      top_speed: '288',
      horse_power: null,
      transmission: 'Manual'
    },
    {
      model_name: '599 GTB Fiorano',
      body: 'Coupe',
      engine: '12',
      top_speed: '331',
      horse_power: '620',
      transmission: 'Manual'
    },
    {
      model_name: '599 GTB Fiorano Automatic',
      body: 'Coupe',
      engine: '12',
      top_speed: '331',
      horse_power: '620',
      transmission: 'Automatic'
    },
    {
      model_name: '612 Scaglietti',
      body: 'Coupe',
      engine: '12',
      top_speed: '315',
      horse_power: '549',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 ',
      body: 'Coupe',
      engine: '8',
      top_speed: '315',
      horse_power: '497',
      transmission: 'Automatic'
    },
    {
      model_name: 'F430 Spider',
      body: 'Convertible',
      engine: '8',
      top_speed: '315',
      horse_power: '497',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 Spider Automatic',
      body: 'Convertible',
      engine: '8',
      top_speed: '315',
      horse_power: '497',
      transmission: 'Automatic'
    },
    {
      model_name: '599 GTB Fiorano ',
      body: 'Coupe',
      engine: '12',
      top_speed: '331',
      horse_power: '620',
      transmission: 'Manual'
    },
    {
      model_name: '599 GTB Fiorano Automatic',
      body: 'Coupe',
      engine: '12',
      top_speed: '331',
      horse_power: '620',
      transmission: 'Automatic'
    },
    {
      model_name: '612 Scaglietti',
      body: 'Coupe',
      engine: '12',
      top_speed: '320',
      horse_power: '540',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 ',
      body: 'Coupe',
      engine: '8',
      top_speed: '315',
      horse_power: '490',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 Spider',
      body: 'Convertible',
      engine: '8',
      top_speed: '305',
      horse_power: '490',
      transmission: 'Manual'
    },
    {
      model_name: '612 Scaglietti',
      body: 'Coupe',
      engine: '12',
      top_speed: '320',
      horse_power: '549',
      transmission: 'Manual'
    },
    {
      model_name: '612 Scaglietti F1',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '548',
      transmission: null
    },
    {
      model_name: 'F430 ',
      body: 'Coupe',
      engine: '8',
      top_speed: '310',
      horse_power: '490',
      transmission: 'Manual'
    },
    {
      model_name: 'F430 Coupe',
      body: 'Coupe',
      engine: '8',
      top_speed: '315',
      horse_power: '497',
      transmission: null
    },
    {
      model_name: 'F430 Spider',
      body: 'Convertible',
      engine: '8',
      top_speed: '310',
      horse_power: '497',
      transmission: 'Manual'
    },
    {
      model_name: '360 Modena',
      body: 'Coupe',
      engine: '8',
      top_speed: '295',
      horse_power: '406',
      transmission: 'Manual'
    },
    {
      model_name: '360 Spider',
      body: 'Convertible',
      engine: '8',
      top_speed: '293',
      horse_power: '406',
      transmission: 'Manual'
    },
    {
      model_name: '575 Superamerica ',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '540',
      transmission: 'Manual'
    },
    {
      model_name: '575M Maranello ',
      body: 'Coupe',
      engine: '12',
      top_speed: '325',
      horse_power: '515',
      transmission: 'Manual'
    },
    {
      model_name: '612 GT Scaglietti',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '522',
      transmission: 'Automatic'
    },
    {
      model_name: '612 Scaglietti',
      body: 'Coupe',
      engine: '12',
      top_speed: '320',
      horse_power: '548',
      transmission: 'Manual'
    },
    {
      model_name: '612 Scaglietti F1',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '540',
      transmission: null
    },
    {
      model_name: 'Enzo ',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '661',
      transmission: 'Manual'
    },
    {
      model_name: 'F 2005 ',
      body: null,
      engine: '10',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'F430 ',
      body: 'Coupe',
      engine: '8',
      top_speed: null,
      horse_power: '492',
      transmission: 'Manual'
    },
    {
      model_name: 'Maranello ',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '515',
      transmission: 'Manual'
    },
    {
      model_name: '360 Modena',
      body: 'Coupe',
      engine: '8',
      top_speed: '295',
      horse_power: '406',
      transmission: 'Manual'
    },
    {
      model_name: '360 Modena Berlinetta',
      body: 'Coupe',
      engine: '8',
      top_speed: null,
      horse_power: '406',
      transmission: 'Manual'
    },
    {
      model_name: '360 Modena Spider',
      body: 'Convertible',
      engine: '8',
      top_speed: null,
      horse_power: '400',
      transmission: 'Manual'
    },
    {
      model_name: '360 Spider',
      body: 'Convertible',
      engine: '8',
      top_speed: '293',
      horse_power: '400',
      transmission: 'Manual'
    },
    {
      model_name: '360 Spider Automatic',
      body: 'Convertible',
      engine: '8',
      top_speed: '293',
      horse_power: '400',
      transmission: 'Automatic'
    },
    {
      model_name: '575 Superamerica ',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '541',
      transmission: 'Manual'
    },
    {
      model_name: '575M Maranello ',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '522',
      transmission: null
    },
    {
      model_name: '612 GT Scaglietti',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '540',
      transmission: 'Automatic'
    },
    {
      model_name: 'Enzo ',
      body: 'Coupe',
      engine: '12',
      top_speed: '350',
      horse_power: '662',
      transmission: 'Manual'
    }
  ]
},
{
  make_name: 'Bugatti',
  manufacturer: 'Volkswagen',
  models: [{
      model_name: 'Veyron 16.4 Grand Sport',
      body: 'Convertible',
      engine: '16',
      top_speed: '408',
      horse_power: '1001',
      transmission: 'Automatic'
    },
    {
      model_name: 'Veyron 16.4 Super Sport',
      body: 'Coupe',
      engine: '16',
      top_speed: '415',
      horse_power: '1200',
      transmission: 'Automatic'
    },
    {
      model_name: 'Veyron 16.4 Grand Sport',
      body: 'Convertible',
      engine: '16',
      top_speed: '408',
      horse_power: '1001',
      transmission: 'Automatic'
    },
    {
      model_name: 'Veyron 16.4 Grand Sport',
      body: 'Convertible',
      engine: '16',
      top_speed: '408',
      horse_power: '1001',
      transmission: 'Automatic'
    },
    {
      model_name: 'Chiron ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 118 ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 218 ',
      body: 'Sedan',
      engine: '18',
      top_speed: '249',
      horse_power: '553',
      transmission: null
    },
    {
      model_name: 'EB 118 ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 218 ',
      body: 'Sedan',
      engine: '18',
      top_speed: '249',
      horse_power: '552',
      transmission: null
    },
    {
      model_name: 'Veyron ',
      body: 'Coupe',
      engine: '16',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 118 ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 218 ',
      body: 'Sedan',
      engine: '18',
      top_speed: '249',
      horse_power: '552',
      transmission: null
    },
    {
      model_name: 'Veyron ',
      body: 'Coupe',
      engine: '16',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 118 ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 218 ',
      body: 'Sedan',
      engine: '18',
      top_speed: '244',
      horse_power: '552',
      transmission: null
    },
    {
      model_name: 'Veyron ',
      body: 'Coupe',
      engine: '16',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 118 ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'Veyron ',
      body: 'Coupe',
      engine: '16',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 118 ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 18-4 Veyron Concept',
      body: 'Coupe',
      engine: '18',
      top_speed: '300',
      horse_power: '563',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 218 ',
      body: 'Sedan',
      engine: '18',
      top_speed: '249',
      horse_power: '552',
      transmission: null
    },
    {
      model_name: 'Veyron ',
      body: 'Coupe',
      engine: '16',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'Veyron 8',
      body: 'Coupe',
      engine: '16',
      top_speed: null,
      horse_power: '639',
      transmission: null
    },
    {
      model_name: 'Chiron 18-3',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 18-3 Chiron Concept',
      body: 'Coupe',
      engine: '18',
      top_speed: '295',
      horse_power: '560',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 218 ',
      body: 'Sedan',
      engine: '18',
      top_speed: '244',
      horse_power: '552',
      transmission: 'Automatic'
    },
    {
      model_name: 'EB 118 ',
      body: 'Coupe',
      engine: '18',
      top_speed: null,
      horse_power: '555',
      transmission: null
    },
    {
      model_name: 'EB 110 ',
      body: 'Coupe',
      engine: '12',
      top_speed: '344',
      horse_power: '561',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 ',
      body: 'Coupe',
      engine: '12',
      top_speed: '344',
      horse_power: '560',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 Cyan',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '608',
      transmission: 'Automatic'
    },
    {
      model_name: 'EB 110 ',
      body: 'Coupe',
      engine: '12',
      top_speed: '344',
      horse_power: '561',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 SS',
      body: 'Coupe',
      engine: '12',
      top_speed: '357',
      horse_power: '659',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 112 ',
      body: 'Coupe',
      engine: '12',
      top_speed: '291',
      horse_power: '460',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 ',
      body: 'Coupe',
      engine: '12',
      top_speed: '344',
      horse_power: '561',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 SS',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '568',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 Super Sport',
      body: 'Coupe',
      engine: '12',
      top_speed: '350',
      horse_power: '659',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 ',
      body: 'Coupe',
      engine: '12',
      top_speed: '344',
      horse_power: '560',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 3.5',
      body: 'Coupe',
      engine: '12',
      top_speed: null,
      horse_power: '610',
      transmission: 'Manual'
    },
    {
      model_name: 'EB 110 Prototype',
      body: 'Coupe',
      engine: '12',
      top_speed: '344',
      horse_power: '608',
      transmission: 'Manual'
    },
    {
      model_name: 'ID 90 ',
      body: null,
      engine: '12',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 101 ',
      body: null,
      engine: '8',
      top_speed: null,
      horse_power: '188',
      transmission: 'Manual'
    },
    {
      model_name: '251 ',
      body: null,
      engine: '8',
      top_speed: null,
      horse_power: null,
      transmission: 'Manual'
    },
    {
      model_name: 'Type 101 ',
      body: null,
      engine: '8',
      top_speed: null,
      horse_power: '135',
      transmission: 'Manual'
    },
    {
      model_name: 'Type 101 ',
      body: null,
      engine: '8',
      top_speed: null,
      horse_power: '188',
      transmission: 'Manual'
    },
    {
      model_name: 'Type 101 ',
      body: null,
      engine: '8',
      top_speed: null,
      horse_power: '188',
      transmission: 'Manual'
    },
    {
      model_name: 'Type 101 ',
      body: null,
      engine: '8',
      top_speed: null,
      horse_power: '135',
      transmission: 'Manual'
    },
    {
      model_name: 'Type 73 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 101 ',
      body: null,
      engine: '8',
      top_speed: null,
      horse_power: '188',
      transmission: 'Manual'
    },
    {
      model_name: 'Type 73 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 73 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 73 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 73 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 68 0.4',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 68 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 68 400',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 68 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 68 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    },
    {
      model_name: 'Type 68 ',
      body: null,
      engine: '4',
      top_speed: null,
      horse_power: null,
      transmission: null
    }
  ]
},
{
  make_name: 'Lamborghini',
  manufacturer: 'Volkswagen',
  models: [{
        model_name: 'Aventador LP 700-4 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4 Roadster 2dr Convertible AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 50 Anniversario 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 Roadster 50 Anniversario 2dr Convertible AWD (6.5L 12cy',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Huracan LP 610-4 2dr Coupe AWD (5.2L 10cyl 7AM)',
        body: 'Two Seaters',
        engine: '10',
        top_speed: null,
        horse_power: '610',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4 Roadster 2dr Convertible AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 50 Anniversario 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 Roadster 50 Anniversario 2dr Convertible AWD (6.5L 12cy',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Huracan LP 610-4 2dr Coupe AWD (5.2L 10cyl 7AM)',
        body: 'Two Seaters',
        engine: '10',
        top_speed: null,
        horse_power: '610',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4 Roadster 2dr Convertible AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 50 Anniversario 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 Roadster 50 Anniversario 2dr Convertible AWD (6.5L 12cy',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Huracan LP 610-4 2dr Coupe AWD (5.2L 10cyl 7AM)',
        body: 'Two Seaters',
        engine: '10',
        top_speed: null,
        horse_power: '610',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4 Roadster 2dr Convertible AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '700',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 50 Anniversario 2dr Coupe AWD (6.5L 12cyl 7AM)',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 720-4 Roadster 50 Anniversario 2dr Convertible AWD (6.5L 12cy',
        body: 'Two Seaters',
        engine: '12',
        top_speed: null,
        horse_power: '720',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Huracan LP 610-4 2dr Coupe AWD (5.2L 10cyl 7AM)',
        body: 'Two Seaters',
        engine: '10',
        top_speed: null,
        horse_power: '610',
        transmission: 'Automated Manual'
      },
      {
        model_name: 'Aventador LP 700-4',
        body: 'Coupe',
        engine: '12',
        top_speed: null,
        horse_power: '710',
        transmission: '7-speed automatic '
      },
      {
        model_name: 'Aventador LP 700-4 ROADSTER',
        body: 'Coupe',
        engine: null,
        top_speed: null,
        horse_power: null,
        transmission: null
      },
      {
        model_name: 'Gallardo LP 550 - 2',
        body: 'Coupe',
        engine: null,
        top_speed: null,
        horse_power: null,
        transmission: '6-speed automatic '
      },
      {
        model_name: 'Gallardo LP 550 -2 SPYDER',
        body: 'Coupe',
        engine: null,
        top_speed: null,
        horse_power: null,
        transmission: '6-speed automatic'
      },
      {
        model_name: 'Gallardo LP 560 -4',
        body: 'Coupe',
        engine: null,
        top_speed: null,
        horse_power: null,
        transmission: '6-speed automatic '
      },
      {
        model_name: 'Gallardo LP 560-4 SPYDER',
        body: 'Roadster',
        engine: null,
        top_speed: null,
        horse_power: null,
        transmission: '6-speed automatic'
      },
      {
        model_name: 'Gallardo LP 570-4 SUPERLEGGERA EDIZIONE TECNICA',
        body: 'Coupe',
        engine: '10',
        top_speed: null,
        horse_power: '570',
        transmission: '6-speed automatic'
      },
      {
        model_name: 'Gallardo LP 570-4 SUPERLEGGERA PERFORMANCE EDIZIONE TECNICA',
        body: 'Coupe',
        engine: '10',
        top_speed: null,
        horse_power: '570',
        transmission: '6-speed automatic'
      },
      {
        model_name: 'Aventador LP 700-4',
        body: 'Coupe',
        engine: '12',
        top_speed: null,
        horse_power: '710',
        transmission: '7-speed automated manual'
      },
      {
        model_name: 'Gallardo LP 570-4 Superleggera',
        body: 'Coupe',
        engine: '10',
        top_speed: null,
        horse_power: '570',
        transmission: 'Manual'
      },
      {
        model_name: 'Gallardo LP 570-4 Superleggera',
        body: 'Coupe',
        engine: '10',
        top_speed: null,
        horse_power: '570',
        transmission: 'Manual'
      },
      {
        model_name: 'Gallardo LP 550-2 Valentino Balboni',
        body: 'Coupe',
        engine: '10',
        top_speed: null,
        horse_power: '558',
        transmission: 'Manual'
      },
      {
        model_name: 'Murcielago LP 670-4 SuperVeloce',
        body: 'Coupe',
        engine: '12',
        top_speed: null,
        horse_power: '679',
        transmission: 'Manual'
      },
      {
        model_name: 'Gallardo LP 560-4',
        body: 'Coupe',
        engine: '10',
        top_speed: '325',
        horse_power: '560',
        transmission: 'Manual'
      },
      {
        model_name: 'Gallardo LP 560-4 Automatic',
        body: 'Coupe',
        engine: '10',
        top_speed: '325',
        horse_power: '560',
        transmission: 'Automatic'
      },
      {
        model_name: 'Gallardo LP 560-4 Coupe',
        body: 'Coupe',
        engine: '10',
        top_speed: '325',
        horse_power: '568',
        transmission: 'Manual'
      },
      {
        model_name: 'Gallardo LP 560-4 Spyder',
        body: 'Convertible',
        engine: '10',
        top_speed: '324',
        horse_power: '569',
        transmission: 'Manual'
      },
      {
        model_name: 'Gallardo LP560',
        body: 'Coupe',
        engine: '10',
        top_speed: '325',
        horse_power: '570',
        transmission: 'Automatic'
      },
      {
        model_name: 'Gallardo Spyder',
        body: 'Coupe',
        engine: '10',
        top_speed: '314',
        horse_power: '520',
        transmission: 'Manual'
      },
      {
        model_name: 'Gallardo Spyder Automatic',
        body: 'Coupe',
        engine: '10',
        top_speed: '314',
        horse_power: '520',
        transmission: 'Automatic'
      },
      {
        model_name: 'Murcielago LP 640',
        body: 'Coupe',
        engine: '12',
        top_speed: '340',
        horse_power: '640',
        transmission: 'Manual'
      }
    ]
  }
]

module.exports = cleanedCarData;