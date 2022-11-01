module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    os: DataTypes.INTEGER,
    estimatedHours: DataTypes.TIME,
    status: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,    
  },
  {
    tableName: 'jobs',
    underscored: true,
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated'
  })
  
  return Job;
}