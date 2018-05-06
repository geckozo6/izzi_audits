require 'test_helper'

class SamplesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sample = samples(:one)
  end

  test "should get index" do
    get samples_url
    assert_response :success
  end

  test "should get new" do
    get new_sample_url
    assert_response :success
  end

  test "should create sample" do
    assert_difference('Sample.count') do
      post samples_url, params: { sample: { aql_id: @sample.aql_id, auditor_id: @sample.auditor_id, business_name: @sample.business_name, delivery_folio: @sample.delivery_folio, equipment_id: @sample.equipment_id, item: @sample.item, lot_size: @sample.lot_size, provider: @sample.provider } }
    end

    assert_redirected_to sample_url(Sample.last)
  end

  test "should show sample" do
    get sample_url(@sample)
    assert_response :success
  end

  test "should get edit" do
    get edit_sample_url(@sample)
    assert_response :success
  end

  test "should update sample" do
    patch sample_url(@sample), params: { sample: { aql_id: @sample.aql_id, auditor_id: @sample.auditor_id, business_name: @sample.business_name, delivery_folio: @sample.delivery_folio, equipment_id: @sample.equipment_id, item: @sample.item, lot_size: @sample.lot_size, provider: @sample.provider } }
    assert_redirected_to sample_url(@sample)
  end

  test "should destroy sample" do
    assert_difference('Sample.count', -1) do
      delete sample_url(@sample)
    end

    assert_redirected_to samples_url
  end
end
