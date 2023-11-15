module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  professorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  classSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  yearOf: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    values: [
    'active',
    'inactive',
    'suspended',
    'licensed',
    ],
  },
  }, {})

  return Classes
}
