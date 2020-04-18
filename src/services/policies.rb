class App::Services::Policies < App::Services::Base


  def list
    return_success(Policy.all.map(&:to_pos))
  end

  def get
    return_success(item.to_pos)
  end

  def create
    policy = Policy.new(data_for(:create))
    save(policy)
  end

  def update
    data = data_for(:create)
    item.set_fields(data, data.keys)
    save(item)
  end


  def item
    @item ||= begin
      id = r.params[:id]
      Policy[id] || return_errors!("No Policy found with id: {id}", 404)
    end
  end

  def self.fields
    {
      save: [
        :stage, :state, :title, :description, :inception_date, :validity_date,
        {
          owner: {
            cond: ['==', {t: 'var', v: 'role'}, {t: 'str', v: 'admin'}]
          }
        },
        :trigger, { sub_context: [:type, :description, :source, :attachment] },
        { beneficiaries: [:segment_id, :sub_segment_id, :impact_id, :impact_description, :impact_magnitude_id] },
        {
          risks: [:statement, :category_id, :severity_id, :likelihood_id, :impact_id, :additional_notes,
                  :mitigation_measures, :attachment]
        }
      ]
    }
  end
end












