export const cleanMakeData = (rawData) => {
  const cleanedMakeData = {
    make_name: 'ferrari',
    manufacturer: 'ferrari',
    models: rawData.map(model => {
      const cleanModel = {
        model_name: model.model_name + ' ' + model.model_trim,
        body: model.model_body,
        engine: model.model_engine_cyl,
        top_speed: model.model_top_speed_kph,
        horse_power: model.model_engine_power_ps,
        transmission: model.model_transmission_type
      }
      return cleanModel
    })
  };
  return cleanedMakeData;
};