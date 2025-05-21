import Profile from '#models/profile'

export default class ProfileService {
  async create(profileToUpdate: any) {
    const { id, profile } = profileToUpdate
    return await Profile.updateOrCreate({ id }, { profile })
  }

  async detail(profileId: any) {
    return await Profile.find(profileId)
  }
}
