module.exports = (sequelize, _DataTypes) => {
  const UserJob = sequelize.define('UserJob', 
   {},
    {
    underscored: true,
    tableName: 'users_jobs',
    timestamps: false,
  });

  UserJob.associate = (models) => {
    models.User.belongsToMany(models.Job, {
      as: 'jobs',
      through: UserJob,
      foreignKey: 'userId',
      otherKey: 'jobId',
    });

    models.Job.belongsToMany(models.User, {
      as: 'users',
      through: UserJob,
      foreignKey: 'jobId',
      otherKey: 'userId',
    });
  }

  return UserJob;
}