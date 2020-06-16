class App::Services::Formulation::Metadata < App::Services::Base

  def model; Policy; end

  def add_beneficiary
    item.beneficiary_ids ||= []
    item.beneficiary_ids << r.params[:beneficiary_id]
    item.beneficiary_ids.uniq!
    { status: item.save }
  end

  def remove_beneficiary
    item.beneficiary_ids ||= []
    item.beneficiary_ids.delete(r.params[:beneficiary_id])
    { status: item.save }    
  end

  def add_beneficiary_profile
    item.beneficiary_profile_ids ||= []
    item.beneficiary_profile_ids << r.params[:beneficiary_profile_id]
    item.beneficiary_profile_ids.uniq!
    { status: item.save }
  end

  def remove_beneficiary_profile
    item.beneficiary_profile_ids ||= []
    item.beneficiary_profile_ids.delete(r.params[:beneficiary_profile_id])
    { status: item.save }
  end

  def add_profile_detail
    item.profile_detail_ids ||= []
    item.profile_detail_ids << r.params[:profile_detail_id]
    item.profile_detail_ids.uniq!
    { status: item.save }
  end

  def remove_profile_detail
    item.profile_detail_ids ||= []
    item.profile_detail_ids.delete(r.params[:profile_detail_id])
    { status: item.save }
  end

  def self.fields
    {
      save: [
        :name, :description, :owner_id, :family_id,
        :policy_category_id, :policy_status_id, :publication_date, :policy_state_id
      ]
    }
  end
end