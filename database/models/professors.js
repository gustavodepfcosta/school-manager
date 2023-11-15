module.exports = (sequelize, DataTypes) => {

    const Professor = sequelize.define('Professor', {
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
      undergraduateInstitution: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      graduationLevel: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: [
          'graduate',
          'postgraduate',
          'masters_degree',
          'doctorate_degree',
          'phd',
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
          'licensed',
        ],
      },
    }, {})

    return Professor
}
