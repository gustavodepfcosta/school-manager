module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfIngress: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    guardianName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guardianContactType: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [
        'phone',
        'email',
      ],
    },
    guardianContactInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [
        'active',
        'inactive',
        'suspended',
        'pending_payment',
      ],
    },
  }, {})

  return Student
}
