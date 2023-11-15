module.exports = (sequelize, DataTypes) => {
  const StudentsClassesRelation = sequelize.define('StudentsClassesRelation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {})

  return StudentsClassesRelation
}
