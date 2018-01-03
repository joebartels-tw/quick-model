'use strict';

const TRUE = /^true$|^t$|^1$|^y$/i;

/**
  @class Transform.Boolean
*/
module.exports = {
  dataType: 'boolean',

  serializer: {

    /**
      @method serialize
      @param value The deserialized value
      @return The serialized value
    */
    serialize(value) {
      return toBool(value);
    }
  },

  deserializer: {

    /**
      Client -> validate -> deserialize -> DB

      @method deserialize
      @param value The serialized value
      @return The deserialized value
    */
    deserialize(value) {
      return toBool(value);
    }
  }
};

function toBool(value, defaultValue = false) {
  let type = typeof value;

  if (type === 'boolean') {
    return value;
  } else if (type === 'string') {
    return value.match(TRUE) !== null;
  } else if (type === 'number') {
    return value === 1;
  }

  return defaultValue;
}