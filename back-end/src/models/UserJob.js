module.exports = (sequelize, DataTypes) => {
  const UserJob = sequelize.define('UserJob', {
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    jobId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
    underscored: true,
    tableName: 'users_jobs',
    timestamps: false,
  });

  UserJob.associate = (models) => {
    models.User.belongsToMany(models.Job, {
      as: 'users',
      foreignKey: 'user_id',
      otherKey: 'job_id',
      through: UserJob,
    });

    models.Job.belongsToMany(models.User, {
      as: 'jobs',
      foreignKey: 'job_id',
      otherKey: 'user_id',
      through: UserJob,
    });
  }

  return UserJob;
}