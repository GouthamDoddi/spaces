class App::Services::Policies < App::Services::Base


  def model; Policy; end

  def list
    byebug 
    super
  end

  def self.fields
    {
      save: [
        :stage, :state, :title, :description, :inception_date, :validity_date, :owner,
        :trigger, { sub_context: [:type, :description, :source, :attachment] },
        { beneficiaries: [:segment_id, :sub_segment_id, :impact_id, :impact_description, :impact_magnitude_id] },
        {
          risks: [:statement, :category_id, :severity_id, :likelihood_id, :impact_id, :additional_notes,
                  :mitigation_measures, :attachment]
        }
      ]
    }
  end

  # def self.fields
  #   {
  #     save: [
  #       :stage, :state, :title, :description, :inception_date, :validity_date,
  #       {
  #         owner: {
  #           cond: ['==', {t: 'var', v: 'role'}, {t: 'str', v: 'admin'}]
  #         }
  #       },
  #       :trigger, { sub_context: [:type, :description, :source, :attachment] },
  #       { beneficiaries: [:segment_id, :sub_segment_id, :impact_id, :impact_description, :impact_magnitude_id] },
  #       {
  #         risks: [:statement, :category_id, :severity_id, :likelihood_id, :impact_id, :additional_notes,
  #                 :mitigation_measures, :attachment]
  #       }
  #     ]
  #   }
  # end
end












