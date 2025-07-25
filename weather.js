<!DOCTYPE html>
<!-- saved from url=(0065)https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" data-turbo-loaded=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style><style>
:root {
  --fontStack-monospace: "Monaspace Neon", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
}
</style>



  
    
  
  
  
  
  
  

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/light-d1334f2b22bf.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/dark-f73a069fd33e.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-f695a361c6b2.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-367eb9a4565a.css"><link data-color-theme="light_colorblind_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind_high_contrast-183adc0db479.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-2ddc677c041d.css"><link data-color-theme="light_tritanopia_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia_high_contrast-649962a5702a.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-3a0d87f72ad4.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-b17a8392e6c4.css"><link data-color-theme="dark_colorblind_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind_high_contrast-e9ff47cedc2b.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-a1cc7dba9f73.css"><link data-color-theme="dark_tritanopia_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia_high_contrast-6c4dd39e2b0f.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-55459b36aa6d.css"><link data-color-theme="dark_dimmed_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed_high_contrast-9a0ef6e40ed3.css">


    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-primitives-dc7ca6859caf.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-03a65c451725.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/global-7a3f084b0401.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/github-ddc22c40adec.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/repository-b58e401b73ae.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/code-4ea853641043.css">

  


  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["alternate_user_config_repo","api_insights_show_missing_data_banner","attestations_filtering","attestations_sorting","billingplatform_copilot_premium_sku","client_version_header","code_scanning_security_configuration_ternary_state","codespaces_prebuild_region_target_update","contact_requests_implicit_opt_in","contentful_lp_copilot_extensions","contentful_lp_flex_features","contentful_lp_footnotes","copilot_chat_attach_images","copilot_chat_attach_multiple_images","copilot_chat_attachments","copilot_chat_disable_model_picker_while_streaming","copilot_chat_floating_sidebar_focus_trap","copilot_chat_group_notifications","copilot_chat_navigable_refs","copilot_chat_opening_thread_switch","copilot_chat_reduce_quota_checks","copilot_chat_vision_in_claude","copilot_chat_vision_skip_thread_create","copilot_chat_wholearea_dd","copilot_custom_copilots_feature_preview","copilot_dotcom_chat_file_upload","copilot_duplicate_thread","copilot_free_to_paid_telem","copilot_ftp_hyperspace_upgrade_prompt","copilot_ftp_settings_upgrade","copilot_ftp_upgrade_to_pro_from_models","copilot_ftp_your_copilot_settings","copilot_immersive_structured_model_picker","copilot_issue_list_show_more","copilot_new_immersive_references_ui","copilot_no_floating_button","copilot_premium_request_quotas","copilot_read_shared_conversation","copilot_share_active_subthread","copilot_spaces_input_menu_select","copilot_spark_allow_empty_commit","copilot_spark_single_user_iteration","copilot_spark_use_streaming","copilot_task_oriented_assistive_prompts","copilot_workbench_connection_reload_banner","copilot_workbench_iterate_panel","copilot_workbench_preview_analytics","copilot_workbench_refresh_on_wsod","copilot_workbench_vm_agent_attachments","custom_copilots_128k_window","custom_copilots_capi_mode","direct_to_salesforce","dnd_no_touch_device_check","dotcom_chat_client_side_skills","failbot_report_error_react_apps_on_page","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","insert_before_patch","issues_catch_non_json_graphql_response","issues_comment_load_user_settings","issues_label_search_url","issues_preserve_tokens_in_urls","issues_react_blur_item_picker_on_close","issues_react_bots_timeline_pagination","issues_react_create_milestone","issues_react_include_bots_in_pickers","issues_react_prohibit_title_fallback","issues_react_remove_placeholders","issues_template_picker_redirect","kb_semantic_api_migration","lifecycle_label_name_updates","link_contact_sales_swp_marketo","marketing_pages_search_explore_provider","memex_mwl_filter_field_delimiter","memex_roadmap_drag_style","nonreporting_relay_graphql_status_codes","primer_react_segmented_control_tooltip","primer_react_select_panel_with_modern_action_list","prx_processing_updates_indicator","remove_child_patch","repository_suggester_elastic_search","sample_network_conn_type","scheduled_reminders_updated_limits","site_homepage_contentful","site_msbuild_hide_integrations","site_msbuild_launch","site_msbuild_webgl_hero","spark_commit_on_default_branch","spark_sync_repository_after_iteration","swp_enterprise_contact_form","use_paginated_org_picker_cost_center_form","use_paginated_repo_picker_cost_center_form","viewscreen_sandbox","workbench_default_sonnet4","workbench_store_readonly"],"login":"Pranav211512"}</script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/wp-runtime-4a2522985eec.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js-a8c266e5f126.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-1d3d52-babac9434833.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_failbot_failbot_ts-d6735ae08a7b.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/environment-37836f8ad297.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_primer_behaviors_dist_esm_index_mjs-c44edfed7f0d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_selector-observer_dist_index_esm_js-cdf2757bd188.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_relative-time-element_dist_index_js-5913bc24f35d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_text-expander-element_dist_index_js-e50fb7a5fe8c.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-8e9f78-c1e2fb329866.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b5f1d7-514a92c925f0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_markdown-toolbar-element_dist_index_js-6a8c7d9a08fe.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-f03a40-c631b99b0f08.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/github-elements-41297914fb58.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/element-registry-60c7eaec63d8.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec-34c4b68b1dd3.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_lit-html_lit-html_js-b93a87060d31.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_morphdom_dist_morphdom-esm_js-300e8e4e0414.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-595819d3686f.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-5f044d8dcee3.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_session-resume_-c39857-54c022ad5a68.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_updatable-content_updatable-content_ts-7b14b8aa0beb.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_sso_ts-ui_packages-900dde-f953ddf42948.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/app_assets_modules_github_sticky-scroll-into-view_ts-e45aabc67d13.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-d0d0a6-a7da4270c5f4.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-567e0f340e27.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/behaviors-161506cb2918.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-ea8eaa-0416579acb39.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/notifications-global-40e14cc64ab7.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_virtualized-list_es_inde-5cfb7e-03a3356911e6.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-70450e-e1a74f43a014.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/app_assets_modules_github_ref-selector_ts-d6297fa24aef.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/codespaces-beb77f9a88fd.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-3eebbd-c8d976843cc9.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_delegated-events_di-e161aa-f6ae1abe18dd.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_remote--3c9c82-aa5ff674466d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/repositories-0a7e1356f07d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-dbbea9-558c1f223d1d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/code-menu-954689af15d6.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/primer-react-4622b3e58029.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/react-core-8408891aa1d3.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/react-lib-8705026b409a.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/octicons-react-8ed765fdb7a0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-b1c483-f0fc35efa8f8.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_cookie_index_js-node_modules_primer_live-region-element_dist_esm_index_j-1ca8f6-89ab81577c38.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-0024bc0658ed.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_paths_index_ts-57c0372aeba2.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_utils_copilot-chat-helpers_ts-0890bb600d8d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_agent-sessions_utils_elapsed-time-util_ts-ui_packages_copilot-chat_utils_copilot--20809c-b3a0eff9e489.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-coding-agent-status_entry_ts-ui_packages_document-metadata_document-metad-13ede0-3142fe498e81.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/copilot-coding-agent-status-7d76b4e3f5b3.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-react.eeb8418b12ad0142bedd.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/copilot-coding-agent-status.cd61ba66bbce522093e4.module.css">
  
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/notifications-subscriptions-menu.6dfe832dc20c52593e5e.module.css">


  



  
  
  
  

    
  


  


    


  
  

  
  

    



  

  




    

  

    

    

      

      

    
    
    

      
  
  


      
      


      


      
      
      

        


  <meta http-equiv="x-pjax-version" content="f924dc9305497565bf6b5617f5327d20756b78a4ed552a928b1dacf72f5f96d2" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="352e51c42d5f5727a7c545752bf34d1f83f40219e7036c6959817149a51651bc" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="89db735453be59dd930c620903f01a619ab60d6fab64230c5f7933369ff0afec" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="6e84d1341a52ad33e5d711bb48c8c0289c61fa6f52231c658367d5a59d7f82a6" data-turbo-track="reload">

  

      
  

  



      


    


  

  

  
  

  
  
  





  

  <style data-styled="active" data-styled-version="5.3.11"></style><link rel="stylesheet" type="text/css" href="./weather_files/lazy-react-partial-repos-overview.cb04761ec2b9b5ad16ba.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./weather_files/lazy-react-partial-keyboard-shortcuts-dialog.f8fba3bd67fe74f9227b.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./weather_files/lazy-react-partial-notifications-subscriptions-menu.6dfe832dc20c52593e5e.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./weather_files/ui_packages_code-view-shared_components_files-search_FileResultsList_tsx.b824b197dc91fa971d59.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./weather_files/lazy-react-partial-global-copilot-menu.bbc0324ff326d6dafed6.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./weather_files/lazy-react-partial-global-create-menu.be9cb11ea6367dfdb719.module.css" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="./weather_files/lazy-react-partial-global-user-nav-drawer.e8cf9cec9edb459b70de.module.css" crossorigin="anonymous"><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: #24292f !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: #ffffff !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: #d8b9ff !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: #24292f !important;
            border: 1px solid #d8b9ff !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: #d8b9ff !important;
            background-color: #24292f !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid #ffffff !important;
            background-color: #ffffff !important;
            color: #1f2328 !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: #1f2328 !important;
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 2px solid #ffffff !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: #1f2328 !important;
            background-color: #ffffff !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid #eaeef2 !important;
            background-color: #32383f !important;
            color: #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: #ffffff !important;
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 1px solid #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 2px solid #6e7781 !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: #ffffff !important;
            background-color: #424a53 !important;
            border: 1px solid #6e7781 !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid #d8b9ff !important;
            background-color: #24292f !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style><link rel="stylesheet" type="text/css" href="./weather_files/lazy-react-partial-copilot-chat.f1dd8ba11f3f49d8ba17.module.css" crossorigin="anonymous"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/react-code-view.833cfc1ade3ba9c7b2e4.module.css"><script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_dompurify_dist_purify_es_mjs-7457ebdd1a1f.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_lodash-es__Stack_js-node_modules_lodash-es__Uint8Array_js-node_modules_l-4faaa6-16c4e2c524de.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_lodash-es_isEqual_js-a0841ced23fc.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_tanstack_react-virtual_dist_esm_index_js-807aab04afeb.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_github_hydro-analytics--e21ffd-0b758af67e69.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_fzy_js_index_js-node_modules_react-reverse-portal_dist_web_index_js-node-452414-05865700b943.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_fetch-headers_fetch-headers_ts-57e0e0-bed68ec00644.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_ref-selector_RefSelector_tsx-6bd266a4340b.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-762eaa-4bb9b612ea61.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_use-analytics_use-analytics_ts-ui_packages_use-client-value_use-client-value_ts-u-8be754-144c1ca8ead3.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_code-view-shared_hooks_use-canonical-object_ts-ui_packages_code-view-shared_hooks-9104f7-06876a487df5.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_app-uuid_app-uuid_ts-ui_packages_repos-file-tree-view_repos-file-tree-view_ts-72a4b5b8380b.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/app_assets_modules_github_blob-anchor_ts-ui_packages_code-nav_code-nav_ts-ui_packages_filter--8253c1-5fde020dbad1.js.download" defer="defer"></script><script crossorigin="anonymous" type="application/javascript" src="./weather_files/react-code-view-984238afc96f.js.download" defer="defer"></script><style type="text/css" id="ms-consent-banner-theme-styles"></style><link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/app_assets_modules_react-partials_repos-overview_components_OverviewContent_module_css-app_as-a6fc18.cb04761ec2b9b5ad16ba.module.css"><script type="application/javascript" src="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_notifications-subscriptions-me-a3b302-9d7fc93687ce.js.download"></script><script type="application/javascript" src="./weather_files/notifications-subscriptions-menu-463d138cca3f.js.download"></script><script type="application/javascript" src="./weather_files/repos-overview-21fc48ec180e.js.download"></script><link rel="dns-prefetch" href="https://github.githubassets.com/"><link rel="dns-prefetch" href="https://avatars.githubusercontent.com/"><link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/"><link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"><link rel="preconnect" href="https://github.githubassets.com/" crossorigin=""><link rel="preconnect" href="https://avatars.githubusercontent.com/"><title>weatherNow/weather.js at main · Akhilesh100426/weatherNow</title><meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)" data-turbo-transient=""><meta name="route-controller" content="blob" data-turbo-transient=""><meta name="route-action" content="show" data-turbo-transient=""><meta name="fetch-nonce" content="v2:1b981764-9989-0e5f-d759-9700d6a166c2"><meta name="current-catalog-service-hash" content="f3abb0cc802f3d7b95fc8762b94bdcb13bf39634c40c357301c4aa1d67a256fb"><meta name="request-id" content="FF47:7BCC4:4A5382:544985:68761467" data-turbo-transient="true"><meta name="html-safe-nonce" content="8342d0c1f3c829d44c5e415ebd4e891d8c4d7ec2dd0694d3c30c808fca30818a" data-turbo-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9Ba2hpbGVzaDEwMDQyNi93ZWF0aGVyTm93L2Jsb2IvbWFpbi93ZWF0aGVyLmpzIiwicmVxdWVzdF9pZCI6IkZGNDc6N0JDQzQ6NEE1MzgyOjU0NDk4NTo2ODc2MTQ2NyIsInZpc2l0b3JfaWQiOiI4MTAzODAyNzIzMTY5NTQzMDkiLCJyZWdpb25fZWRnZSI6ImNlbnRyYWxpbmRpYSIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-turbo-transient="true"><meta name="visitor-hmac" content="0e663104ca11a589e9d797f595af2ee33074af5d4755326b89b28a7763895e66" data-turbo-transient="true"><meta name="hovercard-subject-tag" content="repository:977447995" data-turbo-transient=""><meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree,copilot" data-turbo-transient="true"><meta name="selected-link" value="repo_source" data-turbo-transient=""><link rel="assets" href="https://github.githubassets.com/"><meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I"><meta name="octolytics-url" content="https://collector.github.com/github/collect"><meta name="octolytics-actor-id" content="220198960"><meta name="octolytics-actor-login" content="Pranav211512"><meta name="octolytics-actor-hash" content="c839bbba53c916e4146904ea7390fff5e10ecffd4cc2b97361847e560a13cf76"><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-turbo-transient="true"><meta name="user-login" content="Pranav211512"><link rel="sudo-modal" href="https://github.com/sessions/sudo_modal"><meta name="turbo-cache-control" content="no-preview" data-turbo-transient=""><meta name="turbo-cache-control" content="no-cache" data-turbo-transient=""><meta data-hydrostats="publish"><meta name="go-import" content="github.com/Akhilesh100426/weatherNow git https://github.com/Akhilesh100426/weatherNow.git"><meta name="octolytics-dimension-user_id" content="113796894"><meta name="octolytics-dimension-user_login" content="Akhilesh100426"><meta name="octolytics-dimension-repository_id" content="977447995"><meta name="octolytics-dimension-repository_nwo" content="Akhilesh100426/weatherNow"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="977447995"><meta name="octolytics-dimension-repository_network_root_nwo" content="Akhilesh100426/weatherNow"><meta name="turbo-body-classes" content="logged-in env-production page-responsive"><meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats"><meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors"><meta name="release" content="ec0a56ce849aed6684d72b7f3e8d2c55704305d9"><meta name="ui-target" content="full"><link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000"><link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png"><link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg" data-base-href="https://github.githubassets.com/favicons/favicon"><meta name="theme-color" content="#1e2327"><meta name="color-scheme" content="light dark"><link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials"><style type="text/css" id="ms-consent-banner-theme-styles"></style></head>

  <body class="logged-in env-production page-responsive" style="overflow-wrap: break-word; --dialog-scrollgutter: 15px;">
    <div data-turbo-body="" class="logged-in env-production page-responsive" style="word-wrap: break-word;">
      



    <div class="position-relative header-wrapper js-header-wrapper ">
      <a href="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js#start-of-content" data-skip-target-assigned="false" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>

      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      <script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_ui-commands_ui-commands_ts-b755d908e0b1.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_hydro-analytics_hydro-analytic-f29230-07417997172c.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/keyboard-shortcuts-dialog-cf9f9950f389.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-react.eeb8418b12ad0142bedd.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/keyboard-shortcuts-dialog.f8fba3bd67fe74f9227b.module.css">

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-attempted-ssr="false" data-react-profiling="true" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA_:r0:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>




      

          

              <header class="AppHeader" role="banner">
  <h2 class="sr-only">Navigation Menu</h2>


    

    <div class="AppHeader-globalBar pb-2 js-global-bar">
      <div class="AppHeader-globalBar-start responsive-context-region">
        <div class="">
            <deferred-side-panel data-url="/_side-panels/global" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment" data-nonce="v2:1b981764-9989-0e5f-d759-9700d6a166c2" data-view-component="true"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
  
      <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc" id="dialog-show-dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button p-0 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>

<dialog-helper>
  <dialog data-target="deferred-side-panel.panel" id="dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc" aria-modal="true" aria-labelledby="dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc-title" aria-describedby="dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade Overlay--placement-left SidePanel Overlay--disableScroll">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc-title">
        Global navigation
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
</div></div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="dialog-3b7c9205-6e92-4d90-9a51-3935f63685cc-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body d-flex flex-column px-2">    <div data-view-component="true" class="d-flex flex-column mb-3">
        <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list data-catalyst="">
    <ul data-target="nav-list.topLevelList" data-view-component="true" class="ActionListWrap">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-f4f89dda-89bc-47da-9d8a-9b67d8f4925d" href="https://github.com/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Home
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-302eaa84-b913-41a4-a5c6-8db7767c983b" href="https://github.com/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-b5bce5eb-2f93-4b07-82dc-edbed2f61ea5" href="https://github.com/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROJECTS&quot;,&quot;label&quot;:null}" id="item-614903a1-088a-4deb-8136-050d4dbfa9f7" href="https://github.com/projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-e7bfc33f-55f4-4169-8249-0c173d606980" href="https://github.com/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Discussions
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-895b6185-7bab-497a-8b33-3dae8d9b4fe6" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Codespaces
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;COPILOT&quot;,&quot;label&quot;:null}" id="item-cf4e41be-d07c-4069-b9c4-18d3191e46e2" href="https://github.com/copilot" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Copilot
</span>      
</a>
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-8a2d00d7-c055-4331-a91c-66395753aefc" href="https://github.com/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Explore
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-7a0993b0-1ea2-4041-8fa5-7790922cc243" href="https://github.com/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Marketplace
</span>      
</a>
  
</li>

</ul>  </nav-list>
</nav>

        <div data-view-component="true" class="my-3 d-flex flex-justify-center height-full">
          <span data-view-component="true">
  <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="anim-rotate">
    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
    <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>    <span class="sr-only">Loading</span>
</span>
</div>
</div>
      <div data-view-component="true" class="flex-1"></div>


      <div data-view-component="true" class="px-2">      <p class="color-fg-subtle text-small text-light">© 2025 GitHub, Inc.</p>

      <div data-view-component="true" class="d-flex flex-wrap text-small text-light">
          <a target="_blank" href="https://github.com/about" data-view-component="true" class="Link mr-2">About</a>
          <a target="_blank" href="https://github.blog/" data-view-component="true" class="Link mr-2">Blog</a>
          <a target="_blank" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link mr-2">Terms</a>
          <a target="_blank" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link mr-2">Privacy</a>
          <a target="_blank" href="https://github.com/security" data-view-component="true" class="Link mr-2">Security</a>
          <a target="_blank" href="https://www.githubstatus.com/" data-view-component="true" class="Link mr-3">Status</a>

</div></div>
</div>
      </scrollable-region>
      
</dialog></dialog-helper>


  <div data-show-on-forbidden-error="" hidden="">
    <div class="Box">
  <div class="blankslate-container">
    <div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p><p class="color-fg-muted my-2 mb-2 ws-normal">There was an error while loading. <a class="Link--inTextBlock" data-turbo="false" href="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>
</include-fragment></deferred-side-panel>
        </div>

        <a class="AppHeader-logo ml-1 " href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-turbo="false" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}">
          <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
        </a>

          <context-region-controller class="AppHeader-context responsive-context-region" data-max-items="5" data-catalyst="">
  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="GitHub Breadcrumb">
      
<context-region data-target="context-region-controller.contextRegion" role="list" data-action="context-region-changed:context-region-controller#crumbsChanged" data-catalyst="">
    <context-region-crumb data-crumb-id="contextregion-usercrumb-akhilesh100426" data-targets="context-region.crumbs" data-label="Akhilesh100426" data-href="/Akhilesh100426" data-pre-rendered="" role="listitem" data-catalyst="">
      <a data-target="context-region-crumb.linkElement" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Akhilesh100426&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="user" data-hovercard-url="/users/Akhilesh100426/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Akhilesh100426" id="contextregion-usercrumb-akhilesh100426-link" data-view-component="true" class="AppHeader-context-item" aria-keyshortcuts="Alt+ArrowUp">
        <span data-target="context-region-crumb.labelElement" class="AppHeader-context-item-label ">Akhilesh100426</span>

</a><tool-tip data-target="context-region-crumb.tooltip" for="contextregion-usercrumb-akhilesh100426-link" popover="manual" class="sr-only" position="absolute" data-type="label" data-direction="s" hidden="" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>
          Akhilesh100426
        </tool-tip>
      <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>

    
        
      </context-region-crumb>

      <li data-target="context-region-controller.overflowMenuContainer context-region.overflowMenuContainer" role="listitem" hidden="">
        <action-menu data-target="context-region-controller.overflowActionMenu" data-select-variant="none" data-view-component="true" data-catalyst="" data-ready="true">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-button" popovertarget="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-overlay" aria-controls="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-list" aria-haspopup="true" aria-labelledby="tooltip-5c0a8922-122b-4b85-8707-5d756b993377" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-5c0a8922-122b-4b85-8707-5d756b993377" for="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Show more breadcrumb items</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-overlay" anchor="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 4px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-button" id="action-menu-dc8d427d-6f00-4f38-a0e6-fe0223afc879-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="true" data-crumb-id="contextregion-usercrumb-akhilesh100426" data-targets="context-region.overflowCrumbs action-list.items" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_overflow_menu_crumb&quot;,&quot;label&quot;:&quot;global-navigation&quot;}" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-2c57f6a1-e361-4430-b45d-b37f3be70962" href="https://github.com/Akhilesh100426" role="menuitem" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Akhilesh100426
</span>      
</a>
  
</li>
        <li hidden="true" data-crumb-id="contextregion-repositorycrumb-weathernow" data-targets="context-region.overflowCrumbs action-list.items" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_overflow_menu_crumb&quot;,&quot;label&quot;:&quot;global-navigation&quot;}" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-91724c50-f326-451f-9284-0bb5b30018db" href="https://github.com/Akhilesh100426/weatherNow" role="menuitem" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          weatherNow
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu>
  <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>


      </li>
    <context-region-crumb data-crumb-id="contextregion-repositorycrumb-weathernow" data-targets="context-region.crumbs" data-label="weatherNow" data-href="/Akhilesh100426/weatherNow" data-pre-rendered="" role="listitem" data-catalyst="">
      <a data-target="context-region-crumb.linkElement" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;weatherNow&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="https://github.com/Akhilesh100426/weatherNow" id="contextregion-repositorycrumb-weathernow-link" data-view-component="true" class="AppHeader-context-item">
        <span data-target="context-region-crumb.labelElement" class="AppHeader-context-item-label ">weatherNow</span>

</a><tool-tip data-target="context-region-crumb.tooltip" for="contextregion-repositorycrumb-weathernow-link" popover="manual" class="sr-only" position="absolute" data-type="label" data-direction="s" hidden="true" role="tooltip" style="--tool-tip-position-top: 45.984375px; --tool-tip-position-left: 271.5625px;"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>
          weatherNow
        </tool-tip>
      <context-region-divider data-target="context-region-crumb.dividerElement" data-pre-rendered="" data-catalyst="">
  <span class="AppHeader-context-item-separator">
    <span class="sr-only">/</span>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
    </svg>
  </span>
</context-region-divider>

    
        
      </context-region-crumb>

</context-region>

    </nav>
  </div>
</context-region-controller>

      </div>
      <div class="AppHeader-globalBar-end">
          <div class="AppHeader-search">
              


<qbsearch-input class="search-input" data-scope="repo:Akhilesh100426/weatherNow" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="_wLOitqaA4iC4B63E0Ix3Vb3Qij-mj5Hb2Wh8utDBkS4n2kcpeW9ZpYibgtwHBtIwk_rZ_CGwqTw4UA2Ov5e3Q" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="Akhilesh100426/weatherNow" data-current-org="" data-current-owner="Akhilesh100426" data-logged-in="true" data-copilot-chat-enabled="false" data-nl-search-enabled="false" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0" data-action="click:qbsearch-input#searchInputContainerClicked">
      
            <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control AppHeader-search-control-overflow">
      <label for="AppHeader-searchInput" aria-label="Search or jump to…" class="AppHeader-search-visual--leading">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                <button type="button" data-target="qbsearch-input.inputButton" data-action="click:qbsearch-input#handleExpand" class="AppHeader-searchButton form-control input-contrast text-left color-fg-subtle no-wrap placeholder" data-hotkey="s,/" data-analytics-event="{&quot;location&quot;:&quot;navbar&quot;,&quot;action&quot;:&quot;searchbar&quot;,&quot;context&quot;:&quot;global&quot;,&quot;tag&quot;:&quot;input&quot;,&quot;label&quot;:&quot;searchbar_input_global_navbar&quot;}" aria-describedby="search-error-message-flash">
            <div class="overflow-hidden">
              <span id="qb-input-query" data-target="qbsearch-input.inputButtonText">
                  Type <kbd class="AppHeader-search-kbd">/</kbd> to search
              </span>
            </div>
          </button>

    </div>


  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-e0190c5c-76f0-4e8e-8d5e-9bb05b72f8d4" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox" style="width: 300px;">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

<template id="copilot-error-icon"></template>

<template id="workflow-icon"></template>

<template id="book-icon"></template>

<template id="code-review-icon"></template>

<template id="codespaces-icon"></template>

<template id="comment-icon"></template>

<template id="comment-discussion-icon"></template>

<template id="organization-icon"></template>

<template id="rocket-icon"></template>

<template id="shield-check-icon"></template>

<template id="heart-icon"></template>

<template id="server-icon"></template>

<template id="globe-icon"></template>

<template id="issue-opened-icon"></template>

<template id="device-mobile-icon"></template>

<template id="package-icon"></template>

<template id="credit-card-icon"></template>

<template id="play-icon"></template>

<template id="gift-icon"></template>

<template id="code-square-icon"></template>

<template id="device-desktop-icon"></template>

        <div class="position-relative">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Suggestions" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results" tabindex="-1"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-e0190c5c-76f0-4e8e-8d5e-9bb05b72f8d4" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only">0 suggestions.</div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">Search syntax tips</a>            <div class="d-flex flex-1"></div>
              <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2">  <span class="Button-content">
    <span class="Button-label">Give feedback</span>
  </span>
</button>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
        
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="AycKmDWr4-pGDAaFZVM6QxrcNDP4htEaL52P4UxAG3oND3pvX3GAd9l6xXVuSi4ZRJnzyfz715hyeOTn3v0mJg">
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="7v87Z2-pCqS8QRpO_p7ZlqLJZNtDeK0J6QsWrSPY11INOwkrPRh0tnd1sPvC2-Hm8bmf8ywZxTq7FOY-HLuXYQ">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required="">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false">
              <input type="hidden" value="kq75-_RpwLLmXaIo_QejyWeLo1pBJw3NipqZqTLw7JasfYCVSNeHVwNwqKjcXzHJE2-uQ3ThHlSKRzG9aNfVNA" data-csrf="true">
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OR repo:mona/b) AND lang:python" required="" maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input>  <input type="hidden" value="nky5vvdEaysGsQCO6JT8Tu8YrgQOZO9Py0WBXeV6qmS5_FHnlu4bLOeUOFmtD3zdocc7eynLBrqmFR7djnaX9g" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf">


          </div>

        
          <div class="AppHeader-CopilotChat hide-sm hide-md">
  <react-partial-anchor data-catalyst="">
      <a href="https://github.com/copilot" data-target="react-partial-anchor.anchor" id="copilot-chat-header-button" aria-labelledby="tooltip-b41fb9e9-e301-4c46-be6d-b46930d710af" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonLeft">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot Button-visual">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-b41fb9e9-e301-4c46-be6d-b46930d710af" for="copilot-chat-header-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="position-absolute sr-only" aria-hidden="true" role="tooltip" style="--tool-tip-position-top: 48px; --tool-tip-position-left: 996.0859375px;"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Chat with Copilot</tool-tip>

    
  
      <script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-0024bc0658ed.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_react-relay_index_js-cce72ae26cdb.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc-a919845a804c.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_hastscript_lib_index_js-node_modules_lowlight_lib_all_js-node_modules_re-713cc1-b7c90cd7720d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_diff_lib_index_mjs-3d31f78b8478.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_accname_dist_access-ce77c7-4daf69fcf5e0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_hotkey_dist_index_js-node_modules_tanstack_react-query_build_mode-b4cf9a-f91a30f5eeba.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_relay-environment_relay-environment_ts-44d4cb174711.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_utils_copilot-chat-helpers_ts-0890bb600d8d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_item-picker_components_RepositoryPicker_tsx-ui_packages_safe-html_VerifiedHTML_tsx-f198dc2c1ffd.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_verified-fetch_verified-fetch_ts-ui_packages_copilot-markdown_MarkdownRenderer_tsx-8f3baa526d1b.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_utils_CopilotChatContext_tsx-334da31a0e66.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_hooks_use-chat-message-behavior_ts-ui_packages_copilot-chat_hooks_us-72fdab-7ad080a0462f.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_components_LegalDisclaimer_tsx-ui_packages_copilot-chat_components_M-a4e33b-3093e199c067.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_components_CopilotIconAnimation_tsx-6220e0241178.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_promise-with-resolvers-polyfil-1994a1-d4f56a035501.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_entry_ts-ui_packages_use-client-value_use-client-value_ts-ui_package-24032a-a01bc399e840.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/copilot-chat-dba0959ad407.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-react.eeb8418b12ad0142bedd.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_promise-with-resolvers-polyfil-1994a1.07aaaf0503c38c749b7e.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/copilot-chat.f1dd8ba11f3f49d8ba17.module.css">
      <link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/copilot-markdown-rendering-ddd978d4a7c0.css">
      <script crossorigin="anonymous" type="application/javascript" src="./weather_files/primer-react-4622b3e58029.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/react-core-8408891aa1d3.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/react-lib-8705026b409a.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/octicons-react-8ed765fdb7a0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-b1c483-f0fc35efa8f8.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_cookie_index_js-node_modules_primer_live-region-element_dist_esm_index_j-1ca8f6-89ab81577c38.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-0024bc0658ed.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_react-relay_index_js-cce72ae26cdb.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc-a919845a804c.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_hastscript_lib_index_js-node_modules_lowlight_lib_all_js-node_modules_re-713cc1-b7c90cd7720d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_diff_lib_index_mjs-3d31f78b8478.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_accname_dist_access-ce77c7-4daf69fcf5e0.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_github_hydro-analytics--e21ffd-0b758af67e69.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_github_hotkey_dist_index_js-node_modules_tanstack_react-query_build_mode-b4cf9a-f91a30f5eeba.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_paths_index_ts-57c0372aeba2.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_ui-commands_ui-commands_ts-b755d908e0b1.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_relay-environment_relay-environment_ts-44d4cb174711.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_utils_copilot-chat-helpers_ts-0890bb600d8d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_item-picker_components_RepositoryPicker_tsx-ui_packages_safe-html_VerifiedHTML_tsx-f198dc2c1ffd.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_verified-fetch_verified-fetch_ts-ui_packages_copilot-markdown_MarkdownRenderer_tsx-8f3baa526d1b.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_utils_CopilotChatContext_tsx-334da31a0e66.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_hooks_use-chat-message-behavior_ts-ui_packages_copilot-chat_hooks_us-72fdab-7ad080a0462f.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_components_LegalDisclaimer_tsx-ui_packages_copilot-chat_components_M-a4e33b-3093e199c067.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_components_CopilotIconAnimation_tsx-6220e0241178.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_promise-with-resolvers-polyfil-1994a1-d4f56a035501.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_copilot-chat_entry_ts-ui_packages_use-client-value_use-client-value_ts-ui_package-24032a-a01bc399e840.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/copilot-chat-dba0959ad407.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-react.eeb8418b12ad0142bedd.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_promise-with-resolvers-polyfil-1994a1.07aaaf0503c38c749b7e.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/copilot-chat.f1dd8ba11f3f49d8ba17.module.css">

<react-partial partial-name="copilot-chat" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"currentTopic":{"id":977447995,"name":"weatherNow","ownerLogin":"Akhilesh100426","ownerType":"User","readmePath":"README.md","description":null,"commitOID":"4de1c9940091d4b5e77b430559adf6b03b6d2bcc","ref":"refs/heads/main","refInfo":{"name":"main","type":"branch"},"visibility":"public","languages":[{"name":"JavaScript","percent":35.5},{"name":"HTML","percent":22.7},{"name":"Python","percent":22.7},{"name":"CSS","percent":19.1}],"customInstructions":[]},"findFileWorkerPath":"/assets-cdn/worker/find-file-worker-263cab1760dd.js","renderPopover":false,"renderBetaLabel":false,"chatIsVisible":true,"chatVisibleSettingPath":"/users/Pranav211512/copilot_chat/settings/copilot_chat_visibility","ssoOrganizations":[],"apiVersion":"2025-05-01","agentsPath":"/github-copilot/chat/agents","apiURL":"https://api.individual.githubcopilot.com","currentUserLogin":"Pranav211512","customInstructions":null,"renderKnowledgeBases":false,"customCopilotsEnabled":false,"optedInToPreviewFeatures":false,"optedInToUserFeedback":false,"renderAttachKnowledgeBaseHerePopover":true,"renderKnowledgeBaseAttachedToChatPopover":true,"personalInstructions":null,"reviewLab":false,"realIp":null,"scrollToTop":false,"hasCEorCBAccess":false,"licenseType":"unlicensed","plan":null,"quotas":{"limits":{"premiumInteractions":0},"remaining":{"premiumInteractions":0,"chatPercentage":0.0,"premiumInteractionsPercentage":0.0},"resetDate":"2025-08-01","overagesEnabled":false},"icebreakers":[{"type":"functional","data":[{"id":"create-bug-issue","message":"Hi Copilot! Could you please start a draft issue for a bug? Once you've created the draft issue, if you need more information, ask me 1-2 key questions. If you also think I should upload any information or images that would help write the bug issue, let me know.","titleHtml":"Create an issue for a bug","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"summarize-pulls","message":"Hi Copilot! Could you help summarize a pull request? I'd like to know its purpose and the key changes made. Please include details about the problem it solves, new features or functionality introduced, any breaking changes, testing done, and documentation updates. Thank you!","titleHtml":"Summarize a pull request","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"code-feedback","message":"Hi Copilot! Please review my code for best practices, readability, performance, and potential bugs. First, prompt me to provide the link to the relevant GitHub repository or file. Then, offer concrete suggestions for improvement, explain any issues you discover, and provide example corrections where appropriate.","titleHtml":"Get code feedback","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"next-steps-issue","message":"Hi Copilot! Could you suggest the next actionable steps for an issue, based on either the provided issue link or a copy pasted description?","titleHtml":"Suggest next steps for an issue","icon":"issue-opened","color":"var(--display-green-fgColor)"},{"id":"understand-arch-diagram","message":"Hi Copilot! Could you please help me interpret this architecture diagram?","titleHtml":"Interpret an architecture diagram","icon":"eye","color":"var(--display-purple-fgColor)"},{"id":"create-profile-readme","message":"Hi Copilot! Please create a standout profile README for $$USERNAME$$. Ask me for any key details (such as my profession, top skills, favorite projects, or social links) that would help you personalize it.","titleHtml":"Create a profile README for me","icon":"rocket","color":"var(--display-pink-fgColor)"},{"id":"my-open-pulls","message":"Hi Copilot! Can you please find my open pull requests?","titleHtml":"My open pull requests","icon":"git-pull-request","color":"var(--display-green-fgColor)"},{"id":"make-pong","message":"Hi Copilot! Could you generate a simple Pong game utilizing HTML, CSS, and JavaScript? The player should control the left paddle with their mouse, and the right paddle should be controlled automatically by a basic AI. Make sure the game includes a bouncing ball and collision detection for paddles and walls. Please provide the code for all three components: the HTML file, the CSS file, and the JavaScript file directly within the chat window. Thanks!","titleHtml":"Make a Pong game","icon":"code","color":"var(--display-gray-fgColor)"}]},{"type":"instructional","data":[]},{"type":"interactional","data":[{"id":"to-do-app-local-storage","message":"Create a to-do list application with local storage functionality.","titleHtml":"To-do list with local storage","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"digital-clock-time-zones","message":"Create a digital clock that displays the current time in different time zones.","titleHtml":"A digital time zone clock","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"weather-dashboard-app","message":"Develop a weather dashboard that fetches data from a public weather API.","titleHtml":"Develop a weather dashboard","icon":"code","color":"var(--display-gray-fgColor)"},{"id":"create-joke-generator","message":"Create a random joke generator using an external API.","titleHtml":"Create a joke generator","icon":"code","color":"var(--display-gray-fgColor)"}]}],"canShareThread":true}}</script>
  <div data-target="react-partial.reactRoot"><div class="Box-sc-g0xbh4-0 bpDFns"></div><div class="Box-sc-g0xbh4-0 hmHhrt"></div><script type="application/json" id="__PRIMER_DATA_:r6f:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>


    </react-partial-anchor>
  <react-partial-anchor data-catalyst="">
    <button id="global-copilot-menu-button" data-target="react-partial-anchor.anchor" aria-expanded="false" aria-labelledby="tooltip-66bc2a88-fe75-4f88-ab04-61f7d8332594" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonRight" aria-haspopup="true">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down Button-visual">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button><tool-tip id="tooltip-66bc2a88-fe75-4f88-ab04-61f7d8332594" for="global-copilot-menu-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Open Copilot…</tool-tip>

    
  
      <script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_date-fns_format_mjs-a93a5b85c8ea.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_date-fns_addWeeks_mjs-node_modules_date-fns_addYears_mjs-node_modules_da-827f4f-87575d6383fe.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_github_hotkey_dist_inde-70f9af-30df9bed9390.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/vendors-node_modules_dnd-kit_modifiers_dist_modifiers_esm_js-node_modules_dnd-kit_sortable_di-72228e-b01c014f1995.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_date-picker_components_DatePicker_tsx-99a2135088d3.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_drag-and-drop_drag-and-drop_ts-ui_packages_hydro-analytics_hydro-analytics_ts-2c479ff7f814.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_list-view_src_hooks_use-next-header-tag_ts-ui_packages_list-view_src_ListItem_Lis-0a5d95-17009f8f0b87.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_mergebox_index_ts-ui_packages_-2cc8cc-7a049a56c077.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_history_history_ts-ui_packages_agent-sessions_components_TaskListItem_tsx-ui_pack-05f3f5-6d6dddfd7086.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_alive_alive_ts-ui_packages_alive_connect-alive-subscription_ts-ui_packages_copilo-5ec4d3-587455c652da.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/global-copilot-menu-367a0e4c56a2.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-react.eeb8418b12ad0142bedd.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_mergebox_index_ts-ui_packages_-2cc8cc.55d9c7d0fb68c7ed6b69.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/global-copilot-menu.bbc0324ff326d6dafed6.module.css">

<react-partial partial-name="global-copilot-menu" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA_:r65:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

    </react-partial-anchor>
</div>


        <div class="AppHeader-actions position-relative">
             <react-partial-anchor data-catalyst="">
      <button id="global-create-menu-anchor" aria-label="Create something new" data-target="react-partial-anchor.anchor" type="button" data-view-component="true" class="AppHeader-button global-create-button Button--secondary Button--medium Button width-auto color-fg-muted" aria-describedby="tooltip-d8c03d1a-00b3-44aa-acba-7291beb20717" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
      <span class="Button-visual Button-leadingVisual">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
      </span>
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
  </span>
</button><tool-tip id="tooltip-d8c03d1a-00b3-44aa-acba-7291beb20717" for="global-create-menu-anchor" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Create new...</tool-tip>

      
    
        <script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_document-metadata_document-metadata_ts-ui_packages_promise-with-resolvers-polyfil-b81d9e-168ab7995cb7.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/global-create-menu-8cf1ac98044f.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-react.eeb8418b12ad0142bedd.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/global-create-menu.be9cb11ea6367dfdb719.module.css">

<react-partial partial-name="global-create-menu" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"createRepo":true,"importRepo":true,"codespaces":true,"spark":false,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/Pranav211512?tab=projects","createLegacyProject":false,"createIssue":false,"org":null,"owner":"Akhilesh100426","repo":"weatherNow"}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r69:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

      </react-partial-anchor>


            <a href="https://github.com/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-f54bbb96-4c25-409a-b574-b85295b94b0b" aria-labelledby="tooltip-3f002182-3af6-4e16-a11e-5de40ca45b44" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a><tool-tip id="tooltip-3f002182-3af6-4e16-a11e-5de40ca45b44" for="icon-button-f54bbb96-4c25-409a-b574-b85295b94b0b" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Your issues</tool-tip>

            <a href="https://github.com/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-f2fbe6cd-3efc-485d-890b-f53f19b58666" aria-labelledby="tooltip-876582fa-7e07-4a83-8311-0f012e16653c" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-876582fa-7e07-4a83-8311-0f012e16653c" for="icon-button-f2fbe6cd-3efc-485d-890b-f53f19b58666" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Your pull requests</tool-tip>

        </div>

          <notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MjIwMTk4OTYwIiwidCI6MTc1MjU2ODk0Mn0=--a940fc0b76ffd68589dff51322953a8d22ed8b7846c080e3f1e39ba3d921da13" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel" data-fetch-retry-delay-time="500" data-catalyst="">
    <a id="AppHeader-notifications-button" href="https://github.com/notifications" aria-labelledby="notification-indicator-tooltip" data-hotkey="g n" data-target="notification-indicator.link" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;NOTIFICATIONS_HEADER&quot;,&quot;label&quot;:&quot;icon:read&quot;}" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox Button-visual">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
</a>

    <tool-tip id="notification-indicator-tooltip" data-target="notification-indicator.tooltip" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>You have no unread notifications</tool-tip>
</notification-indicator>

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?repository_id=977447995" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment" data-nonce="v2:1b981764-9989-0e5f-d759-9700d6a166c2" data-view-component="true"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
  
    <react-partial-anchor data-catalyst="">
  <button data-target="react-partial-anchor.anchor" data-login="Pranav211512" aria-label="Open user navigation menu" type="button" data-view-component="true" class="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
    <span class="Button-label"><img src="./weather_files/220198960" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle"></span>
  </span>
</button>
  

    <script crossorigin="anonymous" type="application/javascript" src="./weather_files/ui_packages_global-user-nav-drawer_entry_ts-0507ffbdbc3d.js.download" defer="defer"></script>
<script crossorigin="anonymous" type="application/javascript" src="./weather_files/global-user-nav-drawer-fa10170e4806.js.download" defer="defer"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/primer-react.eeb8418b12ad0142bedd.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./weather_files/global-user-nav-drawer.e8cf9cec9edb459b70de.module.css">

<react-partial partial-name="global-user-nav-drawer" data-ssr="false" data-attempted-ssr="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"owner":{"login":"Pranav211512","name":null,"avatarUrl":"https://avatars.githubusercontent.com/u/220198960?v=4"},"drawerId":"global-user-nav-drawer","lazyLoadItemDataFetchUrl":"/_side-panels/user.json","canAddAccount":true,"addAccountPath":"/login?add_account=1\u0026return_to=https%3A%2F%2Fgithub.com%2FAkhilesh100426%2FweatherNow%2Fblob%2Fmain%2Fassset.jpg","switchAccountPath":"/switch_account","loginAccountPath":"/login?add_account=1","projectsPath":"/Pranav211512?tab=projects","gistsUrl":"https://gist.github.com/mine","docsUrl":"https://docs.github.com","yourEnterpriseUrl":null,"enterpriseSettingsUrl":null,"supportUrl":"https://support.github.com","showAccountSwitcher":true,"showCopilot":true,"showEnterprises":true,"showEnterprise":false,"showGists":true,"showOrganizations":true,"showSponsors":true,"showUpgrade":true,"showFeaturesPreviews":true,"showEnterpriseSettings":false,"createMenuProps":{"createRepo":true,"importRepo":true,"codespaces":true,"spark":false,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/Pranav211512?tab=projects","createLegacyProject":false,"createIssue":false,"org":null,"owner":"Akhilesh100426","repo":"weatherNow"}}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r6c:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

  </react-partial-anchor>


  <div data-show-on-forbidden-error="" hidden="">
    <div class="Box">
  <div class="blankslate-container">
    <div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p><p class="color-fg-muted my-2 mb-2 ws-normal">There was an error while loading. <a class="Link--inTextBlock" data-turbo="false" href="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>
</include-fragment></deferred-side-panel>
        </div>

        <div class="position-absolute mt-2">
            
<site-header-logged-in-user-menu data-catalyst="">

</site-header-logged-in-user-menu>

        </div>
      </div>
    </div>


    
        <div class="AppHeader-localBar">
          <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/Akhilesh100426/weatherNow" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /Akhilesh100426/weatherNow" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected" aria-current="page">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="https://github.com/Akhilesh100426/weatherNow/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /Akhilesh100426/weatherNow/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/Akhilesh100426/weatherNow/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /Akhilesh100426/weatherNow/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/Akhilesh100426/weatherNow/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /Akhilesh100426/weatherNow/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/Akhilesh100426/weatherNow/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /Akhilesh100426/weatherNow/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects">Projects</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/Akhilesh100426/weatherNow/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /Akhilesh100426/weatherNow/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          </a><div data-show-on-forbidden-error="" hidden=""><a id="security-tab" href="https://github.com/Akhilesh100426/weatherNow/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /Akhilesh100426/weatherNow/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    </a><div class="Box"><a id="security-tab" href="https://github.com/Akhilesh100426/weatherNow/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /Akhilesh100426/weatherNow/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
  </a><div class="blankslate-container"><a id="security-tab" href="https://github.com/Akhilesh100426/weatherNow/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /Akhilesh100426/weatherNow/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    </a><div data-view-component="true" class="blankslate blankslate-spacious color-bg-default rounded-2"><a id="security-tab" href="https://github.com/Akhilesh100426/weatherNow/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /Akhilesh100426/weatherNow/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
      

      <h3 data-view-component="true" class="blankslate-heading">        Uh oh!
</h3>
      <p data-view-component="true">        </p></a><p class="color-fg-muted my-2 mb-2 ws-normal"><a id="security-tab" href="https://github.com/Akhilesh100426/weatherNow/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /Akhilesh100426/weatherNow/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">There was an error while loading. </a><a class="Link--inTextBlock" data-turbo="false" href="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js" aria-label="Please reload this page">Please reload this page</a>.</p>
<p></p>

</div>  </div>
</div>  </div>


    
</li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/Akhilesh100426/weatherNow/pulse" data-tab-item="i6insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /Akhilesh100426/weatherNow/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="" data-ready="true">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-button" popovertarget="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-overlay" aria-controls="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-list" aria-haspopup="true" aria-labelledby="tooltip-ff46770e-1a66-4e41-a233-2b0dbb3b9257" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-ff46770e-1a66-4e41-a233-2b0dbb3b9257" for="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Additional navigation options</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-overlay" anchor="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <action-list data-catalyst="">
  <div data-view-component="true">
    <ul aria-labelledby="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-button" id="action-menu-9ec4b7ea-f93b-4c29-8bef-936a3693cb86-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
        <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-0ee0263c-b015-4444-896a-079a545c6cb7" href="https://github.com/Akhilesh100426/weatherNow" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Code
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i1issues-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-1ee791bd-f5de-42cb-8e21-5bf816ca64b2" href="https://github.com/Akhilesh100426/weatherNow/issues" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i2pull-requests-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-f9c614fc-f0e8-48a7-a6e6-27211a82b282" href="https://github.com/Akhilesh100426/weatherNow/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i3actions-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-a079e3e7-bdd4-4c94-b387-9906ac0cacc1" href="https://github.com/Akhilesh100426/weatherNow/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Actions
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i4projects-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-53b39b4a-9e41-46a7-bd82-a379f06ee972" href="https://github.com/Akhilesh100426/weatherNow/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i5security-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-c9994a88-61b6-426f-96ed-a313984bb80d" href="https://github.com/Akhilesh100426/weatherNow/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Security
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i6insights-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    
    <a tabindex="-1" id="item-bdfde083-e922-4b34-afe6-a8a1fffac4e6" href="https://github.com/Akhilesh100426/weatherNow/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Insights
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>
          
        </div>
</header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a class="Link--inTextBlock" href="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a class="Link--inTextBlock" href="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden="">You switched accounts on another tab or window. <a class="Link--inTextBlock" href="https://github.com/Akhilesh100426/weatherNow/blob/main/weather.js">Reload</a> to refresh your session.</span>

    <button id="icon-button-64723588-f359-4535-be28-05ff7f529522" aria-labelledby="tooltip-6e814525-b0e9-4fec-b91a-79e671cffb54" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-6e814525-b0e9-4fec-b91a-79e671cffb54" for="icon-button-64723588-f359-4535-be28-05ff7f529522" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Dismiss alert</tool-tip>


  
</div>
        
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace="">




  <template class="js-flash-template"></template>
</div>


    
  <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MjIwMTk4OTYwIiwidCI6MTc1MjU2ODk0Mn0=--a940fc0b76ffd68589dff51322953a8d22ed8b7846c080e3f1e39ba3d921da13" data-view-component="true" class="js-socket-channel" data-refresh-delay="500" data-catalyst="" data-throttle-delay="5000"></notification-shelf-watcher>
  <div hidden="" data-initial="" data-target="notification-shelf-watcher.placeholder"></div>






  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="" data-project-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
      






    
  <div id="repository-container-header" data-turbo-replace="" hidden=""></div>




<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,Mod+Alt+.">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank" rel="noopener noreferrer">Open in a new github.dev tab</a>
    <a class="d-none" data-hotkey=",,Mod+Alt+," target="_blank" href="https://github.com/codespaces/new/Akhilesh100426/weatherNow/tree/main?resume=1">Open in codespace</a>




    
      
    








<react-app app-name="react-code-view" initial-path="/Akhilesh100426/weatherNow/blob/main/assset.jpg" style="display: block; min-height: calc(100vh - 64px);" data-attempted-ssr="true" data-ssr="true" data-lazy="false" data-alternate="false" data-data-router-enabled="false" data-react-profiling="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"":{"items":[{"name":"README.md","path":"README.md","contentType":"file"},{"name":"assset.jpg","path":"assset.jpg","contentType":"file"},{"name":"frame.html","path":"frame.html","contentType":"file"},{"name":"map.css","path":"map.css","contentType":"file"},{"name":"map.html","path":"map.html","contentType":"file"},{"name":"map.js","path":"map.js","contentType":"file"},{"name":"nav.html","path":"nav.html","contentType":"file"},{"name":"server.py","path":"server.py","contentType":"file"},{"name":"weather.css","path":"weather.css","contentType":"file"},{"name":"weather.html","path":"weather.html","contentType":"file"},{"name":"weather.js","path":"weather.js","contentType":"file"}],"totalCount":11}},"fileTreeProcessingTime":3.4394270000000002,"foldersToFetch":[],"incompleteFileTree":false,"repo":{"id":977447995,"defaultBranch":"main","name":"weatherNow","ownerLogin":"Akhilesh100426","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2025-05-04T13:59:34.000+05:30","ownerAvatar":"https://avatars.githubusercontent.com/u/113796894?v=4","public":true,"private":false,"isOrgOwned":false},"codeLineWrapEnabled":false,"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"main","listCacheKey":"v0:1746347374.0","canEdit":true,"refType":"branch","currentOid":"4de1c9940091d4b5e77b430559adf6b03b6d2bcc"},"path":"assset.jpg","currentUser":{"id":220198960,"login":"Pranav211512","userEmail":"pranavari12@gmail.com"},"blob":{"rawLines":null,"stylingDirectives":[],"colorizedLines":null,"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/Akhilesh100426/weatherNow/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false},"displayName":"assset.jpg","displayUrl":"https://github.com/Akhilesh100426/weatherNow/blob/main/assset.jpg?raw=true","headerInfo":{"blobSize":"3.68 MB","deleteTooltip":"Fork this repository and delete the file","editTooltip":"Fork this repository and edit the file","ghDesktopPath":"https://desktop.github.com","isGitLfs":false,"onBranch":true,"shortPath":"0a945c6","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2FAkhilesh100426%2FweatherNow%2Fblob%2Fmain%2Fassset.jpg","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":null,"truncatedSloc":null},"mode":"file"},"image":true,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplate":null,"discussionTemplate":null,"language":null,"languageID":null,"large":true,"planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/Akhilesh100426/weatherNow/blob/main/assset.jpg","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","releasePath":"/Akhilesh100426/weatherNow/releases/new?marketplace=true","showPublishActionBanner":false},"rawBlobUrl":"https://github.com/Akhilesh100426/weatherNow/raw/refs/heads/main/assset.jpg","renderImageOrRaw":true,"richText":null,"renderedFileInfo":null,"shortPath":null,"symbolsEnabled":true,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","actionsOnboardingTip":null},"truncated":true,"viewable":false,"workflowRedirectUrl":null,"symbols":null},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"copilotAccessAllowed":false,"modelsAccessAllowed":false,"modelsRepoIntegrationEnabled":false,"isMarketplaceEnabled":true,"csrf_tokens":{"/Akhilesh100426/weatherNow/branches":{"post":"Ma4RXjxgZ0MfYVZHcCjYf2ZPAcWpHo0YvOmoleM5aASpy1FaNi1wL9u5epLRdztLyVMGnbw7CjSaRBUog3aVtA"},"/repos/preferences":{"post":"9eC8qtYFlnEwOLCj8-PbIEiEFuH2tZLPuudwPVCxqwKm57wCd9xlbJQ4aQcAApzxtjHg9yb2TrsOj6UzQHVKKA"}}},"title":"weatherNow/assset.jpg at main · Akhilesh100426/weatherNow","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-263cab1760dd.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-98e6e9db3609.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"react_blob_overlay":true,"accessible_code_button":true}}}</script>
  <div data-target="react-app.reactRoot"><meta data-hydrostats="publish"> <!-- --> <!-- --> <button hidden="" data-testid="header-permalink-button" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="y,Shift+Y"></button><button hidden="" data-hotkey="y,Shift+Y"></button><div><div style="--spacing:var(--spacing-none)" class="prc-PageLayout-PageLayoutRoot-1zlEO"><div class="prc-PageLayout-PageLayoutWrapper-s2ao4" data-width="full"><div class="prc-PageLayout-PageLayoutContent-jzDMn"><div tabindex="0" class="Box-sc-g0xbh4-0 gISSDQ"><div class="prc-PageLayout-PaneWrapper-nGO0U ReposFileTreePane-module__Pane--wS7IV ReposFileTreePane-module__HidePane--Gj4XZ" style="--offset-header:0px;--spacing-row:var(--spacing-none);--spacing-column:var(--spacing-none)" data-is-hidden="false" data-position="start" data-sticky="true"><div class="prc-PageLayout-HorizontalDivider-CYLp5 prc-PageLayout-PaneHorizontalDivider-4exOb" data-variant="none" data-position="start" style="--spacing-divider:var(--spacing-none);--spacing:var(--spacing-none)"></div><div class="prc-PageLayout-Pane-Vl5LI" data-resizable="true" style="--spacing:var(--spacing-none);--pane-min-width:256px;--pane-max-width:calc(100vw - var(--pane-max-width-diff));--pane-width-size:var(--pane-width-large);--pane-width:320px"><div><div id="repos-file-tree" class="Box-sc-g0xbh4-0 bNhwaa"><div class="ReposFileTreePane-module__Box_1--Bz4Aw"><div class="Box-sc-g0xbh4-0 jfIeyl"><h2 class="use-tree-pane-module__Heading--DlnQ2 prc-Heading-Heading-6CmGO"><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-expanded="true" aria-controls="repos-file-tree" class="prc-Button-ButtonBase-c50BI position-relative ExpandFileTreeButton-module__expandButton--gL4is fgColor-muted prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":R756mplab:-loading-announcement" aria-labelledby=":R156mplab:" data-hotkey="Control+b"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="se" aria-hidden="true" id=":R156mplab:" popover="auto">Collapse file tree</span><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+b"></button></h2><h2 class="Box-sc-g0xbh4-0 kOkWgo prc-Heading-Heading-6CmGO">Files</h2></div><div class="ReposFileTreePane-module__Box_2--uC_pl"><div class="ReposFileTreePane-module__Box_3--Tgoja"><button type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="main branch" data-testid="anchor-button" class="Box-sc-g0xbh4-0 gMOVLe prc-Button-ButtonBase-c50BI react-repos-tree-pane-ref-selector width-full ref-selector-class" data-loading="false" data-size="medium" data-variant="default" aria-describedby="branch-picker-repos-header-ref-selector-loading-announcement" id="branch-picker-repos-header-ref-selector" data-hotkey="w"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x"><div class="Box-sc-g0xbh4-0 bZBlpz"><div class="Box-sc-g0xbh4-0 lhTYNA"><svg aria-hidden="true" focusable="false" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 ffLUq ref-selector-button-text-container"><span class="Box-sc-g0xbh4-0 bmcJak prc-Text-Text-0ima0">&nbsp;<!-- -->main</span></div></div></span><span data-component="trailingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="w"></button></div><div class="ReposFileTreePane-module__Box_4--brBpx"><a data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ReposFileTreePane-module__IconButton--tNSTv prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":R6q6mplab:-loading-announcement" aria-labelledby=":Rq6mplab:" href="https://github.com/Akhilesh100426/weatherNow/new/main" data-discover="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-plus" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg></a><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="n" aria-hidden="true" id=":Rq6mplab:" popover="auto">Add file</span><button data-component="IconButton" type="button" class="Box-sc-g0xbh4-0 dPUXSa prc-Button-ButtonBase-c50BI SearchButton-module__IconButton--LGy8b prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":Rra6mplab:-loading-announcement" aria-labelledby=":R3a6mplab:" data-hotkey="/"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-hidden="true" id=":R3a6mplab:" popover="auto">Search this repository</span><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="/"></button></div></div></div><div class="Box-sc-g0xbh4-0 ReposFileTreePane-module__FileResultsList--t38MI FileResultsList-module__Box_1--ZnWjQ"><span class="FileResultsList-module__FilesSearchBox--J5FtW FilesSearchBox-module__TextInput--LKpMn TextInput-wrapper prc-components-TextInputWrapper-i1ofR prc-components-TextInputBaseWrapper-ueK9q" data-leading-visual="true" data-trailing-visual="true" aria-busy="false"><span class="TextInput-icon" id=":R5amplab:" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Go to file" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autocorrect="off" spellcheck="false" placeholder="Go to file" aria-describedby=":R5amplab: :R5amplabH1:" data-component="input" class="prc-components-Input-Ic-y8" value=""><span class="TextInput-icon" id=":R5amplabH1:" aria-hidden="true"><div class="FilesSearchBox-module__Box--Ye6rL"><kbd>t</kbd></div></span></span></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="t,Shift+T"></button><button hidden="" data-hotkey="t,Shift+T"></button><div class="Box-sc-g0xbh4-0 ReposFileTreePane-module__Box_5--tQNH_"><div><div class="react-tree-show-tree-items"><div class="ReposFileTreeView-module__Box--V2jWA" data-testid="repos-file-tree-container"><nav aria-label="File Tree Navigation"><span role="status" aria-live="polite" aria-atomic="true" class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 brGdpi"></span><ul role="tree" aria-label="Files" data-truncate-text="true" class="prc-TreeView-TreeViewRootUlStyles-eZtxW"><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="README.md-item" role="treeitem" aria-labelledby=":r54:" aria-describedby=":r55:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r54:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r55:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>README.md</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="assset.jpg-item" role="treeitem" aria-labelledby=":r57:" aria-describedby=":r58:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r57:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r58:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>assset.jpg</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="frame.html-item" role="treeitem" aria-labelledby=":r5a:" aria-describedby=":r5b:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5a:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r5b:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>frame.html</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="map.css-item" role="treeitem" aria-labelledby=":r5d:" aria-describedby=":r5e:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5d:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r5e:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>map.css</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="map.html-item" role="treeitem" aria-labelledby=":r5g:" aria-describedby=":r5h:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5g:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r5h:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>map.html</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="map.js-item" role="treeitem" aria-labelledby=":r5j:" aria-describedby=":r5k:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5j:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r5k:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>map.js</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="nav.html-item" role="treeitem" aria-labelledby=":r5m:" aria-describedby=":r5n:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5m:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r5n:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>nav.html</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="server.py-item" role="treeitem" aria-labelledby=":r5p:" aria-describedby=":r5q:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5p:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r5q:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>server.py</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="weather.css-item" role="treeitem" aria-labelledby=":r5s:" aria-describedby=":r5t:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5s:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r5t:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>weather.css</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="-1" id="weather.html-item" role="treeitem" aria-labelledby=":r5v:" aria-describedby=":r60:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5v:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r60:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>weather.html</span></span></div></div></li><li class="PRIVATE_TreeView-item prc-TreeView-TreeViewItem-ShJr0" tabindex="0" id="weather.js-item" role="treeitem" aria-labelledby=":r62:" aria-describedby=":r63:" aria-level="1" aria-selected="true" aria-current="true"><div class="PRIVATE_TreeView-item-container prc-TreeView-TreeViewItemContainer--2Rkn" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r62:" class="PRIVATE_TreeView-item-content prc-TreeView-TreeViewItemContent-f0r0b"><div class="PRIVATE_VisuallyHidden prc-TreeView-TreeViewVisuallyHidden-4-mPv" aria-hidden="true" id=":r63:"></div><div class="PRIVATE_TreeView-item-visual prc-TreeView-TreeViewItemVisual-dRlGq" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text prc-TreeView-TreeViewItemContentText-smZM-"><span>weather.js</span></span></div></div></li></ul></nav></div></div></div></div></div></div></div><div class="prc-PageLayout-VerticalDivider-4A4Qm prc-PageLayout-PaneVerticalDivider-1c9vy" data-variant="line" data-position="start" style="--spacing:var(--spacing-none)"><div role="slider" aria-label="Draggable pane splitter" aria-valuemin="256" aria-valuemax="407" aria-valuenow="320" aria-valuetext="Pane width 320 pixels" tabindex="0" class="Box-sc-g0xbh4-0 bHLmSv"></div></div></div></div><div class="prc-PageLayout-ContentWrapper-b-QRo CodeView-module__SplitPageLayout_Content--qxR1C" data-is-hidden="false"><div class="prc-PageLayout-Content--F7-I" data-width="full" style="--spacing:var(--spacing-none)"><div data-selector="repos-split-pane-content" tabindex="0" class="Box-sc-g0xbh4-0 leYMvG"><div class="Box-sc-g0xbh4-0 KMPzq"><div class="container CodeViewHeader-module__Box--PofRM"><div class="px-3 pt-3 pb-0" id="StickyHeader"><div class="CodeViewHeader-module__Box_1--KpLzV"><div class="CodeViewHeader-module__Box_2--xzDOt"><div class="CodeViewHeader-module__Box_6--iStzT"><div class="Box-sc-g0xbh4-0 cEytCf"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb--wide-heading" id="repos-header-breadcrumb--wide" class="Box-sc-g0xbh4-0 fzFXnm"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" id="repos-header-breadcrumb--wide-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 iMnkmv"><li class="Box-sc-g0xbh4-0 ghzDag"><a class="Box-sc-g0xbh4-0 kHuKdh prc-Link-Link-85e08" sx="[object Object]" data-testid="breadcrumbs-repo-link" href="https://github.com/Akhilesh100426/weatherNow/tree/main" data-discover="true">weatherNow</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 ghzDag"><span class="Box-sc-g0xbh4-0 hzJBof prc-Text-Text-0ima0" aria-hidden="true">/</span><h1 class="Box-sc-g0xbh4-0 jGhzSQ prc-Heading-Heading-6CmGO" tabindex="-1" id="file-name-id-wide">weather.js</h1></div><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ml-2 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":Rvb9lab:-loading-announcement" aria-labelledby=":R3b9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="CopyToClipboardButton-module__tooltip--Dq1IB prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-label="Copy path" aria-hidden="true" id=":R3b9lab:" popover="auto">Copy path</span></div></div><div class="react-code-view-header-element--wide"><div class="CodeViewHeader-module__Box_7--FZfkg"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" class="Box-sc-g0xbh4-0 fjrFuv prc-Button-ButtonBase-c50BI NavigationMenu-module__Button--SJihq" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r6g:-loading-announcement"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" data-testid="more-file-actions-button-nav-menu-wide" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-c50BI js-blob-dropdown-click NavigationMenu-module__IconButton--NqJ_L prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":Rihj9lab:-loading-announcement" aria-labelledby=":Rfihj9lab:" id=":Rihj9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-hidden="true" id=":Rfihj9lab:" popover="auto">More file actions</span> </div></div></div><div class="react-code-view-header-element--narrow"><div class="CodeViewHeader-module__Box_7--FZfkg"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" class="Box-sc-g0xbh4-0 fjrFuv prc-Button-ButtonBase-c50BI NavigationMenu-module__Button--SJihq" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r6h:-loading-announcement"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" data-testid="more-file-actions-button-nav-menu-narrow" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-c50BI js-blob-dropdown-click NavigationMenu-module__IconButton--NqJ_L prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":Rihr9lab:-loading-announcement" aria-labelledby=":Rfihr9lab:" id=":Rihr9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-hidden="true" id=":Rfihr9lab:" popover="auto">More file actions</span> </div></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 dJxjrT react-code-view-bottom-padding"> <div class="BlobTopBanners-module__Box--g_bGk"></div> <!-- --> <!-- --> </div><div class="Box-sc-g0xbh4-0 dJxjrT"> <!-- --> <!-- --> <button hidden="" data-testid="" data-hotkey="r,Shift+R" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="r,Shift+R"></button><div class="d-flex flex-column border rounded-2 mb-3 pl-1"><div class="LatestCommit-module__Box--En0AE"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading">Latest commit</h2><div data-testid="latest-commit" class="LatestCommit-module__Box_1--Kkzat"><div class="CommitAttribution-module__CommitAttributionContainer--dZiJ_"><div data-testid="author-avatar" class="Box-sc-g0xbh4-0 AuthorAvatar-module__AuthorAvatarContainer--NQwZ2"><a class="prc-Link-Link-85e08" href="https://github.com/Akhilesh100426" data-testid="avatar-icon-link" data-hovercard-url="/users/Akhilesh100426/hovercard" aria-keyshortcuts="Alt+ArrowUp"><img data-component="Avatar" class="AuthorAvatar-module__GitHubAvatar--Bx7dK prc-Avatar-Avatar-ZRS-m" alt="Akhilesh100426" width="20" height="20" src="./weather_files/113796894" data-testid="github-avatar" aria-label="Akhilesh100426" style="--avatarSize-regular: 20px;"></a><a class="Box-sc-g0xbh4-0 gLSgdJ AuthorAvatar-module__authorHoverableLink--ED3Do prc-Link-Link-85e08" data-muted="true" href="https://github.com/Akhilesh100426/weatherNow/commits?author=Akhilesh100426" aria-label="commits by Akhilesh100426" data-hovercard-url="/users/Akhilesh100426/hovercard" aria-keyshortcuts="Alt+ArrowUp">Akhilesh100426</a></div><span class=""></span></div><div class="d-none d-sm-flex LatestCommit-module__Box_2--gAJMD"><div class="Truncate flex-items-center f5"><span class="Truncate-text prc-Text-Text-0ima0" data-testid="latest-commit-html"><a href="https://github.com/Akhilesh100426/weatherNow/commit/4de1c9940091d4b5e77b430559adf6b03b6d2bcc" class="Link--secondary" data-pjax="true" data-hovercard-url="/Akhilesh100426/weatherNow/commit/4de1c9940091d4b5e77b430559adf6b03b6d2bcc/hovercard" aria-keyshortcuts="Alt+ArrowUp">Add files via upload</a></span></div></div><span class="d-flex d-sm-none fgColor-muted f6"><relative-time class="sc-aXZVg" tense="past" datetime="2025-05-04T08:30:43.000Z" title="May 4, 2025, 2:00 PM GMT+5:30"><template shadowrootmode="open">2 months ago</template>May 4, 2025</relative-time></span></div><div class="d-flex flex-shrink-0 gap-2"><div data-testid="latest-commit-details" class="d-none d-sm-flex flex-items-center"><span class="d-flex flex-nowrap fgColor-muted f6"><a class="Link--secondary prc-Link-Link-85e08" aria-label="Commit 4de1c99" data-hovercard-url="/Akhilesh100426/weatherNow/commit/4de1c9940091d4b5e77b430559adf6b03b6d2bcc/hovercard" href="https://github.com/Akhilesh100426/weatherNow/commit/4de1c9940091d4b5e77b430559adf6b03b6d2bcc" data-discover="true" aria-keyshortcuts="Alt+ArrowUp">4de1c99</a>&nbsp;·&nbsp;<relative-time class="sc-aXZVg" tense="past" datetime="2025-05-04T08:30:43.000Z" title="May 4, 2025, 2:00 PM GMT+5:30"><template shadowrootmode="open">2 months ago</template>May 4, 2025</relative-time></span></div><div class="d-flex gap-2"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading">History</h2><a href="https://github.com/Akhilesh100426/weatherNow/commits/main/weather.js" class="prc-Button-ButtonBase-c50BI d-none d-lg-flex LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":R1bdal9lab:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x"><span class="fgColor-default">History</span></span></span></a><div class="d-sm-none"><button data-component="IconButton" type="button" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" class="prc-Button-ButtonBase-c50BI LatestCommit-module__IconButton--jJLCx prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r7a:-loading-announcement" aria-labelledby=":r79:"><svg aria-hidden="true" focusable="false" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="s" aria-hidden="true" id=":r79:" popover="auto">Open commit details</span></div><div class="d-flex d-lg-none"><span role="tooltip" aria-label="History" id="history-icon-button-tooltip" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-n"><a aria-label="View commit history for this file." href="https://github.com/Akhilesh100426/weatherNow/commits/main/weather.js" class="prc-Button-ButtonBase-c50BI LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":R6bdal9lab:-loading-announcement history-icon-button-tooltip"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></div></div></div><div class="Box-sc-g0xbh4-0 ldRxiI"><div class="Box-sc-g0xbh4-0 fVkfyA container"><div class="Box-sc-g0xbh4-0 gNAmSV react-code-size-details-banner"><div class="react-code-size-details-banner CodeSizeDetails-module__Box--QdxnQ"><div class="text-mono CodeSizeDetails-module__Box_1--_uFDs"><div data-testid="blob-size" class="CodeSizeDetails-module__Truncate_1--er0Uk prc-Truncate-Truncate-A9Wn6" data-inline="true" title="5.93 KB" style="--truncate-max-width: 100%;"><span>152 lines (135 loc) · 5.93 KB</span></div></div></div><div class="react-code-size-details-banner"><button style="--button-color:fg.default" type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 kXyYCF prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":R9fal9lab:-loading-announcement" id=":R9fal9lab:"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 jdLMhu react-blob-view-header-sticky" id="repos-sticky-header"><div class="BlobViewHeader-module__Box--pvsIA"><div class="react-blob-sticky-header"><div class="Box-sc-g0xbh4-0 hqwSEx"><div class="FileNameStickyHeader-module__Box_5--xBJ2J"><div class="Box-sc-g0xbh4-0 fHind"><nav data-testid="breadcrumbs" aria-labelledby="sticky-breadcrumb-heading" id="sticky-breadcrumb" class="Box-sc-g0xbh4-0 fzFXnm"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" id="sticky-breadcrumb-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 iMnkmv"><li class="Box-sc-g0xbh4-0 ghzDag"><a class="Box-sc-g0xbh4-0 kHuKdh prc-Link-Link-85e08" sx="[object Object]" data-testid="breadcrumbs-repo-link" href="https://github.com/Akhilesh100426/weatherNow/tree/main" data-discover="true">weatherNow</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 ghzDag"><span class="Box-sc-g0xbh4-0 oDtgN prc-Text-Text-0ima0" aria-hidden="true">/</span><h1 class="Box-sc-g0xbh4-0 dnZoUW prc-Heading-Heading-6CmGO" tabindex="-1" id="sticky-file-name-id">weather.js</h1></div></div><button type="button" class="prc-Button-ButtonBase-c50BI FileNameStickyHeader-module__Button--SaiiH FileNameStickyHeader-module__GoToTopButton--9lB4x" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":R4mfal9lab:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Top</span></span></button></div></div></div><div class="Box-sc-g0xbh4-0 gFKFyc BlobViewHeader-module__Box_1--PPihg"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading">File metadata and controls</h2><div class="BlobViewHeader-module__Box_2--G_jCG"><ul aria-label="File view" class="prc-SegmentedControl-SegmentedControl-e7570 BlobTabButtons-module__SegmentedControl--JMGov" data-size="small"><li class="prc-SegmentedControl-Item-7Aq6h" data-selected=""><button aria-current="true" class="prc-SegmentedControl-Button-ojWXD" type="button" data-hotkey="Control+/ Control+c" style="--separator-color: transparent;"><span class="prc-SegmentedControl-Content-gnQ4n segmentedControl-content"><div class="prc-SegmentedControl-Text-c5gSh segmentedControl-text" data-text="Code">Code</div></span></button></li><li class="prc-SegmentedControl-Item-7Aq6h"><button aria-current="false" class="prc-SegmentedControl-Button-ojWXD" type="button" data-hotkey="b,Shift+B,Control+/ Control+b" style="--separator-color: var(--borderColor-default, var(--color-border-default, #d0d7de));"><span class="prc-SegmentedControl-Content-gnQ4n segmentedControl-content"><div class="prc-SegmentedControl-Text-c5gSh segmentedControl-text" data-text="Blame">Blame</div></span></button></li></ul><button hidden="" data-testid="" data-hotkey="Control+/ Control+c" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><div class="react-code-size-details-in-header CodeSizeDetails-module__Box--QdxnQ"><div class="text-mono CodeSizeDetails-module__Box_1--_uFDs"><div data-testid="blob-size" class="CodeSizeDetails-module__Truncate_1--er0Uk prc-Truncate-Truncate-A9Wn6" data-inline="true" title="5.93 KB" style="--truncate-max-width: 100%;"><span>152 lines (135 loc) · 5.93 KB</span></div></div></div><div class="react-code-size-details-in-header"><button style="--button-color:fg.default" type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 kXyYCF prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":Rt6fal9lab:-loading-announcement" id=":Rt6fal9lab:"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="BlobViewHeader-module__Box_3--Kvpex"><button hidden="" data-testid="" data-hotkey="Control+Shift+&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&gt;"></button><button hidden="" data-testid="" data-hotkey="Control+Shift+&lt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&lt;"></button><div class="react-blob-header-edit-and-raw-actions BlobViewHeader-module__Box_4--vFP89"><div class="prc-ButtonGroup-ButtonGroup-vcMeG"><div><a href="https://github.com/Akhilesh100426/weatherNow/raw/refs/heads/main/weather.js" data-testid="raw-button" data-hotkey="Control+/ Control+r" class="Box-sc-g0xbh4-0 lefpaC prc-Button-ButtonBase-c50BI BlobViewHeader-module__LinkButton--DMph4" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r6i:-loading-announcement"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x">Raw</span></span></a></div><div><button data-component="IconButton" type="button" data-testid="copy-raw-button" data-hotkey="Control+Shift+C" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r6k:-loading-announcement" aria-labelledby=":r6j:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="n" aria-hidden="true" id=":r6j:" popover="auto">Copy raw file</span></div><div><button data-component="IconButton" type="button" data-testid="download-raw-button" data-hotkey="Control+Shift+S" class="Box-sc-g0xbh4-0 ivobqY prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r6m:-loading-announcement" aria-labelledby=":r6l:"><svg aria-hidden="true" focusable="false" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="n" aria-hidden="true" id=":r6l:" popover="auto">Download raw file</span></div></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+/ Control+r"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey="Control+Shift+C" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey="Control+Shift+S" data-hotkey-scope="read-only-cursor-text-area"></button><a class="js-github-dev-shortcut d-none prc-Link-Link-85e08" href="https://github.dev/" data-hotkey="., Control+Shift+/"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="., Control+Shift+/"></button><a class="js-github-dev-new-tab-shortcut d-none prc-Link-Link-85e08" href="https://github.dev/" target="_blank" data-hotkey="Shift+.,Shift+&gt;,&gt;"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Shift+.,Shift+&gt;,&gt;"></button><div class="prc-ButtonGroup-ButtonGroup-vcMeG"><div><a sx="[object Object]" data-component="IconButton" type="button" data-testid="edit-button" class="Box-sc-g0xbh4-0 iCOsHh prc-Button-ButtonBase-c50BI BlobViewHeader-module__IconButton_1--MzNlL prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":Rdl76fal9lab:-loading-announcement" aria-labelledby=":R1l76fal9lab:" href="https://github.com/Akhilesh100426/weatherNow/edit/main/weather.js" data-discover="true" data-hotkey="e,Shift+E"><svg aria-hidden="true" focusable="false" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></a><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-hidden="true" id=":R1l76fal9lab:" popover="auto">Fork this repository and edit the file</span></div><div><button data-component="IconButton" type="button" data-testid="more-edit-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":R2l76fal9lab:-loading-announcement" aria-labelledby=":R1ul76fal9lab:" id=":R2l76fal9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-hidden="true" id=":R1ul76fal9lab:" popover="auto">More edit options</span></div></div><button hidden="" data-testid="" data-hotkey="e,Shift+E" data-hotkey-scope="read-only-cursor-text-area"></button></div><button data-component="IconButton" type="button" aria-pressed="false" aria-expanded="false" aria-controls="symbols-pane" data-hotkey="Control+i" data-testid="symbols-button" class="prc-Button-ButtonBase-c50BI BlobViewHeader-module__IconButton_2--KDy6i prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby="symbols-button-loading-announcement" aria-labelledby=":r6n:" id="symbols-button"><svg aria-hidden="true" focusable="false" class="octicon octicon-code-square" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-hidden="true" id=":r6n:" popover="auto">Open symbols panel</span><div class="react-blob-header-edit-and-raw-actions-combined"><button data-component="IconButton" type="button" title="More file actions" data-testid="more-file-actions-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-c50BI js-blob-dropdown-click BlobViewHeader-module__IconButton--uO1fA prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":R5v6fal9lab:-loading-announcement" aria-labelledby=":R3tv6fal9lab:" id=":R5v6fal9lab:"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align:text-bottom"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button><span class="prc-TooltipV2-Tooltip-cYMVY" data-direction="nw" aria-hidden="true" id=":R3tv6fal9lab:" popover="auto">Edit and raw actions</span></div></div></div></div><div></div></div><div class="Box-sc-g0xbh4-0 hGyMdv"><section aria-labelledby="file-name-id-wide file-name-id-mobile" class="Box-sc-g0xbh4-0 dceWRL"><div class="Box-sc-g0xbh4-0 dGXHv"><div id="highlighted-line-menu-positioner" class="position-relative"><div id="copilot-button-positioner" class="Box-sc-g0xbh4-0 bpDFns"><div class="Box-sc-g0xbh4-0 iJOeCH"><div class="Box-sc-g0xbh4-0 eJSJhL"><div class="Box-sc-g0xbh4-0 bIxOmm"><div aria-hidden="true" data-testid="navigation-cursor" class="Box-sc-g0xbh4-0 code-navigation-cursor" style="top: 0px; left: 92px;"> </div><button hidden="" data-testid="NavigationCursorEnter" data-hotkey="Control+Enter" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightedLine" data-hotkey="Shift+J" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightAndExpandMenu" data-hotkey="Alt+Shift+C,Alt+Shift+Ç" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageDown" data-hotkey="PageDown" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageUp" data-hotkey="PageUp" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="/" data-hotkey-scope="read-only-cursor-text-area"></button></div></div><textarea id="read-only-cursor-text-area" data-testid="read-only-cursor-text-area" aria-label="file content" aria-readonly="true" inputmode="none" tabindex="0" aria-multiline="true" aria-haspopup="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-ms-editor="false" class="react-blob-textarea react-blob-print-hide" style="resize: none; margin-top: -2px; padding-left: 92px; padding-right: 70px; width: 100%; background-color: unset; box-sizing: border-box; color: transparent; position: absolute; border: none; tab-size: 8; outline: none; overflow: auto hidden; height: 3060px; font-size: 12px; line-height: 20px; overflow-wrap: normal; overscroll-behavior-x: none; white-space: pre; z-index: 1;">const API_KEY = "e26b22aca359183e9666ee3e386b6b36"; // OpenWeatherMap API Key

document.addEventListener("DOMContentLoaded", () =&gt; {
    const cityInput = document.getElementById("city-input");
    const searchBtn = document.getElementById("search-btn");
    const currentLocationBtn = document.getElementById("current-location-btn");
    const predictTempBtn = document.getElementById("predict-temp-btn");

    searchBtn.addEventListener("click", () =&gt; {
        const city = cityInput.value.trim();
        if (city) {
            getWeatherByCity(city);
        } else {
            displayError("Please enter a city name!");
        }
    });

    currentLocationBtn.addEventListener("click", () =&gt; {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) =&gt; {
                    const { latitude, longitude } = position.coords;
                    getWeatherByCoords(latitude, longitude);
                },
                () =&gt; {
                    displayError("Unable to retrieve location. Please enable location services.");
                }
            );
        } else {
            displayError("Geolocation is not supported by this browser.");
        }
    });

    predictTempBtn.addEventListener("click", () =&gt; {
        const city = document.getElementById("location").textContent;
        const lat = predictTempBtn.getAttribute("data-lat");
        const lon = predictTempBtn.getAttribute("data-lon");

        if (city !== "Loading..." || (lat &amp;&amp; lon)) {
            fetchPrediction(city, lat, lon);
        } else {
            displayError("Please search for a city first.");
        }
    });
});

/* Fetch weather by city name */
function getWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&amp;units=metric&amp;appid=${API_KEY}`;
    fetchWeather(url);
}

/* Fetch weather by coordinates */
function getWeatherByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&amp;lon=${lon}&amp;units=metric&amp;appid=${API_KEY}`;
    fetchWeather(url, lat, lon);
}

/* Fetch weather data and update UI */
function fetchWeather(url, lat = null, lon = null) {
    fetch(url)
        .then((response) =&gt; response.json())
        .then((data) =&gt; {
            if (data.cod !== 200) {
                displayError("City not found! Please enter a valid city name.");
                return;
            }
            updateWeatherUI(data, lat, lon);
        })
        .catch(() =&gt; displayError("Error fetching weather data. Please try again."));
}

/* Update UI with weather data */
function updateWeatherUI(data, lat, lon) {
    document.querySelector(".weather-info").innerHTML = `
        &lt;h2 id="location"&gt;${data.name}, ${data.sys.country}&lt;/h2&gt;
        &lt;h1 class="temp"&gt;
            &lt;span class="material-symbols-outlined"&gt;thermometer&lt;/span&gt; ${Math.round(data.main.temp)}°C
        &lt;/h1&gt;
        &lt;p class="description"&gt;${data.weather[0].description}&lt;/p&gt;

        &lt;p class="feels-like"&gt;
            &lt;span class="material-symbols-outlined"&gt;thermometer&lt;/span&gt; Feels Like: ${Math.round(data.main.feels_like)}°C
        &lt;/p&gt;
        &lt;p class="temp-min"&gt;
            &lt;span class="material-symbols-outlined"&gt;thermometer_add&lt;/span&gt; Min Temp: ${Math.round(data.main.temp_min)}°C
        &lt;/p&gt;
        &lt;p class="temp-max"&gt;
            &lt;span class="material-symbols-outlined"&gt;thermometer_minus&lt;/span&gt; Max Temp: ${Math.round(data.main.temp_max)}°C
        &lt;/p&gt;

        &lt;p class="humidity"&gt;
            &lt;span class="material-symbols-outlined"&gt;humidity_mid&lt;/span&gt; Humidity: ${data.main.humidity}%
        &lt;/p&gt;
        &lt;p class="wind"&gt;
            &lt;span class="material-symbols-outlined"&gt;air&lt;/span&gt; Wind Speed: ${data.wind.speed} m/s
        &lt;/p&gt;
        &lt;p class="sea-level"&gt;
            &lt;span class="material-symbols-outlined"&gt;tsunami&lt;/span&gt; Sea Level: ${data.main.sea_level ? data.main.sea_level + " hPa" : "N/A"}
        &lt;/p&gt;
        &lt;p class="clouds"&gt;
            &lt;span class="material-symbols-outlined"&gt;foggy&lt;/span&gt; Clouds: ${data.clouds.all}%
        &lt;/p&gt;

        &lt;p class="sunrise"&gt;
            &lt;span class="material-symbols-outlined"&gt;wb_sunny&lt;/span&gt; Sunrise: ${convertTimestamp(data.sys.sunrise)}
        &lt;/p&gt;
        &lt;p class="sunset"&gt;
            &lt;span class="material-symbols-outlined"&gt;wb_twilight&lt;/span&gt; Sunset: ${convertTimestamp(data.sys.sunset)}
        &lt;/p&gt;
    `;

    document.getElementById("predict-temp-btn").style.display = "block";
    document.getElementById("predict-temp-btn").setAttribute("data-lat", lat || data.coord.lat);
    document.getElementById("predict-temp-btn").setAttribute("data-lon", lon || data.coord.lon);
}

/* Fetch temperature prediction from the backend */
function fetchPrediction(city, lat, lon) {
    document.getElementById("prediction-results").innerHTML = "Fetching predictions...";

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city, lat, lon })  // Send either city OR lat/lon
    })
    .then(response =&gt; response.json())
    .then(data =&gt; {
        let output = "&lt;h3&gt;Future Temperature Predictions:&lt;/h3&gt;";
        data.predictions.forEach(pred =&gt; {
            output += `&lt;p&gt;${pred.date}: ${pred.temp}°C&lt;/p&gt;`;
        });
        document.getElementById("prediction-results").innerHTML = output;
    })
    .catch(() =&gt; {
        document.getElementById("prediction-results").innerHTML = "Error fetching predictions.";
    });
}

/* Convert UNIX timestamp to readable time */
function convertTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* Display an error message */
function displayError(message) {
    document.querySelector(".weather-info").innerHTML = `
        &lt;h1 style="font-size: 6rem; margin-top:20px; text-align: center;"&gt;(&gt;_&lt;)&lt;/h1&gt;
        &lt;p style="text-align: center;margin-top:5px; font-size: 2rem; color: white;"&gt;${message}&lt;/p&gt;
    `;
}</textarea><button hidden="" data-testid="" data-hotkey="Alt+F1,Control+Alt+˙,Control+Alt+h" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 kHHiZS"><div tabindex="0" class="Box-sc-g0xbh4-0 jqUoVd"><div class="Box-sc-g0xbh4-0 kYlHYO react-code-file-contents" role="presentation" aria-hidden="true" data-tab-size="8" data-paste-markdown-skip="true" data-hpc="true"><div class="react-line-numbers-no-virtualization" style="pointer-events: auto; position: relative; z-index: 2;"><div class="react-no-virtualization-wrapper-lines"><div data-line-number="1" class="react-line-number react-code-text" style="padding-right: 16px;">1</div><div data-line-number="2" class="react-line-number react-code-text" style="padding-right: 16px;">2</div><div data-line-number="3" class="react-line-number react-code-text" style="padding-right: 16px;">3</div><div data-line-number="4" class="react-line-number react-code-text" style="padding-right: 16px;">4</div><div data-line-number="5" class="react-line-number react-code-text" style="padding-right: 16px;">5</div><div data-line-number="6" class="react-line-number react-code-text" style="padding-right: 16px;">6</div><div data-line-number="7" class="react-line-number react-code-text" style="padding-right: 16px;">7</div><div data-line-number="8" class="react-line-number react-code-text" style="padding-right: 16px;">8</div><div data-line-number="9" class="react-line-number react-code-text" style="padding-right: 16px;">9</div><div data-line-number="10" class="react-line-number react-code-text" style="padding-right: 16px;">10</div><div data-line-number="11" class="react-line-number react-code-text" style="padding-right: 16px;">11</div><div data-line-number="12" class="react-line-number react-code-text" style="padding-right: 16px;">12</div><div data-line-number="13" class="react-line-number react-code-text" style="padding-right: 16px;">13</div><div data-line-number="14" class="react-line-number react-code-text" style="padding-right: 16px;">14</div><div data-line-number="15" class="react-line-number react-code-text" style="padding-right: 16px;">15</div><div data-line-number="16" class="react-line-number react-code-text" style="padding-right: 16px;">16</div><div data-line-number="17" class="react-line-number react-code-text" style="padding-right: 16px;">17</div><div data-line-number="18" class="react-line-number react-code-text" style="padding-right: 16px;">18</div><div data-line-number="19" class="react-line-number react-code-text" style="padding-right: 16px;">19</div><div data-line-number="20" class="react-line-number react-code-text" style="padding-right: 16px;">20</div><div data-line-number="21" class="react-line-number react-code-text" style="padding-right: 16px;">21</div><div data-line-number="22" class="react-line-number react-code-text" style="padding-right: 16px;">22</div><div data-line-number="23" class="react-line-number react-code-text" style="padding-right: 16px;">23</div><div data-line-number="24" class="react-line-number react-code-text" style="padding-right: 16px;">24</div><div data-line-number="25" class="react-line-number react-code-text" style="padding-right: 16px;">25</div><div data-line-number="26" class="react-line-number react-code-text" style="padding-right: 16px;">26</div><div data-line-number="27" class="react-line-number react-code-text" style="padding-right: 16px;">27</div><div data-line-number="28" class="react-line-number react-code-text" style="padding-right: 16px;">28</div><div data-line-number="29" class="react-line-number react-code-text" style="padding-right: 16px;">29</div><div data-line-number="30" class="react-line-number react-code-text" style="padding-right: 16px;">30</div><div data-line-number="31" class="react-line-number react-code-text" style="padding-right: 16px;">31</div><div data-line-number="32" class="react-line-number react-code-text" style="padding-right: 16px;">32</div><div data-line-number="33" class="react-line-number react-code-text" style="padding-right: 16px;">33</div><div data-line-number="34" class="react-line-number react-code-text" style="padding-right: 16px;">34</div><div data-line-number="35" class="react-line-number react-code-text" style="padding-right: 16px;">35</div><div data-line-number="36" class="react-line-number react-code-text" style="padding-right: 16px;">36</div><div data-line-number="37" class="react-line-number react-code-text" style="padding-right: 16px;">37</div><div data-line-number="38" class="react-line-number react-code-text" style="padding-right: 16px;">38</div><div data-line-number="39" class="react-line-number react-code-text" style="padding-right: 16px;">39</div><div data-line-number="40" class="react-line-number react-code-text" style="padding-right: 16px;">40</div><div data-line-number="41" class="react-line-number react-code-text" style="padding-right: 16px;">41</div><div data-line-number="42" class="react-line-number react-code-text" style="padding-right: 16px;">42</div><div data-line-number="43" class="react-line-number react-code-text" style="padding-right: 16px;">43</div><div data-line-number="44" class="react-line-number react-code-text" style="padding-right: 16px;">44</div><div data-line-number="45" class="react-line-number react-code-text" style="padding-right: 16px;">45</div><div data-line-number="46" class="react-line-number react-code-text" style="padding-right: 16px;">46</div><div data-line-number="47" class="react-line-number react-code-text" style="padding-right: 16px;">47</div><div data-line-number="48" class="react-line-number react-code-text" style="padding-right: 16px;">48</div><div data-line-number="49" class="react-line-number react-code-text" style="padding-right: 16px;">49</div><div data-line-number="50" class="react-line-number react-code-text" style="padding-right: 16px;">50</div><div data-line-number="51" class="react-line-number react-code-text" style="padding-right: 16px;">51</div><div data-line-number="52" class="react-line-number react-code-text" style="padding-right: 16px;">52</div><div data-line-number="53" class="react-line-number react-code-text" style="padding-right: 16px;">53</div><div data-line-number="54" class="react-line-number react-code-text" style="padding-right: 16px;">54</div><div data-line-number="55" class="react-line-number react-code-text" style="padding-right: 16px;">55</div><div data-line-number="56" class="react-line-number react-code-text" style="padding-right: 16px;">56</div><div data-line-number="57" class="react-line-number react-code-text" style="padding-right: 16px;">57</div><div data-line-number="58" class="react-line-number react-code-text" style="padding-right: 16px;">58</div><div data-line-number="59" class="react-line-number react-code-text" style="padding-right: 16px;">59</div><div data-line-number="60" class="react-line-number react-code-text" style="padding-right: 16px;">60<span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 iGLarr"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="61" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">61</div><div data-line-number="62" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">62</div><div data-line-number="63" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">63</div><div data-line-number="64" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">64</div><div data-line-number="65" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">65</div><div data-line-number="66" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">66</div><div data-line-number="67" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">67</div><div data-line-number="68" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">68</div><div data-line-number="69" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">69</div><div data-line-number="70" class="child-of-line-59  react-line-number react-code-text" style="padding-right: 16px;">70</div><div data-line-number="71" class="react-line-number react-code-text" style="padding-right: 16px;">71</div><div data-line-number="72" class="react-line-number react-code-text" style="padding-right: 16px;">72</div><div data-line-number="73" class="react-line-number react-code-text" style="padding-right: 16px;">73</div><div data-line-number="74" class="react-line-number react-code-text" style="padding-right: 16px;">74<span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 iGLarr"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="75" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">75</div><div data-line-number="76" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">76</div><div data-line-number="77" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">77</div><div data-line-number="78" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">78</div><div data-line-number="79" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">79</div><div data-line-number="80" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">80</div><div data-line-number="81" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">81</div><div data-line-number="82" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">82</div><div data-line-number="83" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">83</div><div data-line-number="84" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">84</div><div data-line-number="85" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">85</div><div data-line-number="86" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">86</div><div data-line-number="87" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">87</div><div data-line-number="88" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">88</div><div data-line-number="89" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">89</div><div data-line-number="90" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">90</div><div data-line-number="91" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">91</div><div data-line-number="92" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">92</div><div data-line-number="93" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">93</div><div data-line-number="94" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">94</div><div data-line-number="95" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">95</div><div data-line-number="96" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">96</div><div data-line-number="97" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">97</div><div data-line-number="98" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">98</div><div data-line-number="99" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">99</div><div data-line-number="100" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">100</div><div data-line-number="101" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">101</div><div data-line-number="102" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">102</div><div data-line-number="103" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">103</div><div data-line-number="104" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">104</div><div data-line-number="105" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">105</div><div data-line-number="106" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">106</div><div data-line-number="107" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">107</div><div data-line-number="108" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">108</div><div data-line-number="109" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">109</div><div data-line-number="110" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">110</div><div data-line-number="111" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">111</div><div data-line-number="112" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">112</div><div data-line-number="113" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">113</div><div data-line-number="114" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">114</div><div data-line-number="115" class="child-of-line-73  react-line-number react-code-text" style="padding-right: 16px;">115</div><div data-line-number="116" class="react-line-number react-code-text" style="padding-right: 16px;">116</div><div data-line-number="117" class="react-line-number react-code-text" style="padding-right: 16px;">117</div><div data-line-number="118" class="react-line-number react-code-text" style="padding-right: 16px;">118</div><div data-line-number="119" class="react-line-number react-code-text" style="padding-right: 16px;">119<span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 iGLarr"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="120" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">120</div></div><div class="react-no-virtualization-wrapper-lines"><div data-line-number="121" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">121</div><div data-line-number="122" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">122</div><div data-line-number="123" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">123</div><div data-line-number="124" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">124</div><div data-line-number="125" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">125</div><div data-line-number="126" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">126</div><div data-line-number="127" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">127</div><div data-line-number="128" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">128</div><div data-line-number="129" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">129</div><div data-line-number="130" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">130</div><div data-line-number="131" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">131</div><div data-line-number="132" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">132</div><div data-line-number="133" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">133</div><div data-line-number="134" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">134</div><div data-line-number="135" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">135</div><div data-line-number="136" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">136</div><div data-line-number="137" class="child-of-line-118  react-line-number react-code-text" style="padding-right: 16px;">137</div><div data-line-number="138" class="react-line-number react-code-text" style="padding-right: 16px;">138</div><div data-line-number="139" class="react-line-number react-code-text" style="padding-right: 16px;">139</div><div data-line-number="140" class="react-line-number react-code-text" style="padding-right: 16px;">140</div><div data-line-number="141" class="react-line-number react-code-text" style="padding-right: 16px;">141</div><div data-line-number="142" class="react-line-number react-code-text" style="padding-right: 16px;">142</div><div data-line-number="143" class="react-line-number react-code-text" style="padding-right: 16px;">143</div><div data-line-number="144" class="react-line-number react-code-text" style="padding-right: 16px;">144</div><div data-line-number="145" class="react-line-number react-code-text" style="padding-right: 16px;">145</div><div data-line-number="146" class="react-line-number react-code-text" style="padding-right: 16px;">146</div><div data-line-number="147" class="react-line-number react-code-text" style="padding-right: 16px;">147<span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 iGLarr"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="148" class="child-of-line-146  react-line-number react-code-text" style="padding-right: 16px;">148</div><div data-line-number="149" class="child-of-line-146  react-line-number react-code-text" style="padding-right: 16px;">149</div><div data-line-number="150" class="child-of-line-146  react-line-number react-code-text" style="padding-right: 16px;">150</div><div data-line-number="151" class="child-of-line-146  react-line-number react-code-text" style="padding-right: 16px;">151</div><div data-line-number="152" class="react-line-number react-code-text" style="padding-right: 16px;">152</div></div></div><div class="react-code-lines"><div inert="inert"><div class="react-no-virtualization-wrapper"><div id="LC1" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">const</span> <span class="pl-c1">API_KEY</span> <span class="pl-c1">=</span> <span class="pl-s">"e26b22aca359183e9666ee3e386b6b36"</span><span class="pl-kos">;</span> <span class="pl-c">// OpenWeatherMap API Key</span></div>
<div id="LC2" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC3" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">addEventListener</span><span class="pl-kos">(</span><span class="pl-s">"DOMContentLoaded"</span><span class="pl-kos">,</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC4" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">const</span> <span class="pl-s1">cityInput</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"city-input"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC5" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">const</span> <span class="pl-s1">searchBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"search-btn"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC6" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">const</span> <span class="pl-s1">currentLocationBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"current-location-btn"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC7" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">const</span> <span class="pl-s1">predictTempBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"predict-temp-btn"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC8" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC9" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-s1">searchBtn</span><span class="pl-kos">.</span><span class="pl-en">addEventListener</span><span class="pl-kos">(</span><span class="pl-s">"click"</span><span class="pl-kos">,</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC10" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-k">const</span> <span class="pl-s1">city</span> <span class="pl-c1">=</span> <span class="pl-s1">cityInput</span><span class="pl-kos">.</span><span class="pl-c1">value</span><span class="pl-kos">.</span><span class="pl-en">trim</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC11" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">city</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC12" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">            <span class="pl-en">getWeatherByCity</span><span class="pl-kos">(</span><span class="pl-s1">city</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC13" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div>
<div id="LC14" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">            <span class="pl-en">displayError</span><span class="pl-kos">(</span><span class="pl-s">"Please enter a city name!"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC15" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-kos">}</span></div>
<div id="LC16" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC17" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC18" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-s1">currentLocationBtn</span><span class="pl-kos">.</span><span class="pl-en">addEventListener</span><span class="pl-kos">(</span><span class="pl-s">"click"</span><span class="pl-kos">,</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC19" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">navigator</span><span class="pl-kos">.</span><span class="pl-c1">geolocation</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC20" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">            <span class="pl-s1">navigator</span><span class="pl-kos">.</span><span class="pl-c1">geolocation</span><span class="pl-kos">.</span><span class="pl-en">getCurrentPosition</span><span class="pl-kos">(</span></div>
<div id="LC21" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">                <span class="pl-kos">(</span><span class="pl-s1">position</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC22" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">                    <span class="pl-k">const</span> <span class="pl-kos">{</span> latitude<span class="pl-kos">,</span> longitude <span class="pl-kos">}</span> <span class="pl-c1">=</span> <span class="pl-s1">position</span><span class="pl-kos">.</span><span class="pl-c1">coords</span><span class="pl-kos">;</span></div>
<div id="LC23" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">                    <span class="pl-en">getWeatherByCoords</span><span class="pl-kos">(</span><span class="pl-s1">latitude</span><span class="pl-kos">,</span> <span class="pl-s1">longitude</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC24" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">                <span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC25" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">                <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC26" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">                    <span class="pl-en">displayError</span><span class="pl-kos">(</span><span class="pl-s">"Unable to retrieve location. Please enable location services."</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC27" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">                <span class="pl-kos">}</span></div>
<div id="LC28" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">            <span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC29" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div>
<div id="LC30" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">            <span class="pl-en">displayError</span><span class="pl-kos">(</span><span class="pl-s">"Geolocation is not supported by this browser."</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC31" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-kos">}</span></div>
<div id="LC32" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC33" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC34" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-s1">predictTempBtn</span><span class="pl-kos">.</span><span class="pl-en">addEventListener</span><span class="pl-kos">(</span><span class="pl-s">"click"</span><span class="pl-kos">,</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC35" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-k">const</span> <span class="pl-s1">city</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"location"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">textContent</span><span class="pl-kos">;</span></div>
<div id="LC36" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-k">const</span> <span class="pl-s1">lat</span> <span class="pl-c1">=</span> <span class="pl-s1">predictTempBtn</span><span class="pl-kos">.</span><span class="pl-en">getAttribute</span><span class="pl-kos">(</span><span class="pl-s">"data-lat"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC37" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-k">const</span> <span class="pl-s1">lon</span> <span class="pl-c1">=</span> <span class="pl-s1">predictTempBtn</span><span class="pl-kos">.</span><span class="pl-en">getAttribute</span><span class="pl-kos">(</span><span class="pl-s">"data-lon"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC38" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC39" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">city</span> <span class="pl-c1">!==</span> <span class="pl-s">"Loading..."</span> <span class="pl-c1">||</span> <span class="pl-kos">(</span><span class="pl-s1">lat</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC40" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">            <span class="pl-en">fetchPrediction</span><span class="pl-kos">(</span><span class="pl-s1">city</span><span class="pl-kos">,</span> <span class="pl-s1">lat</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC41" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></div>
<div id="LC42" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">            <span class="pl-en">displayError</span><span class="pl-kos">(</span><span class="pl-s">"Please search for a city first."</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC43" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">        <span class="pl-kos">}</span></div>
<div id="LC44" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC45" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC46" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC47" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-c">/* Fetch weather by city name */</span></div>
<div id="LC48" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">function</span> <span class="pl-en">getWeatherByCity</span><span class="pl-kos">(</span><span class="pl-s1">city</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC49" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">const</span> <span class="pl-s1">url</span> <span class="pl-c1">=</span> <span class="pl-s">`https://api.openweathermap.org/data/2.5/weather?q=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">city</span><span class="pl-kos">}</span></span>&amp;units=metric&amp;appid=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-c1">API_KEY</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span></div>
<div id="LC50" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-en">fetchWeather</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC51" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span></div>
<div id="LC52" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC53" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-c">/* Fetch weather by coordinates */</span></div>
<div id="LC54" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">function</span> <span class="pl-en">getWeatherByCoords</span><span class="pl-kos">(</span><span class="pl-s1">lat</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC55" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">const</span> <span class="pl-s1">url</span> <span class="pl-c1">=</span> <span class="pl-s">`https://api.openweathermap.org/data/2.5/weather?lat=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lat</span><span class="pl-kos">}</span></span>&amp;lon=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lon</span><span class="pl-kos">}</span></span>&amp;units=metric&amp;appid=<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-c1">API_KEY</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span></div>
<div id="LC56" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-en">fetchWeather</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">lat</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC57" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span></div>
<div id="LC58" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC59" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-c">/* Fetch weather data and update UI */</span></div>
<div id="LC60" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">function</span> <span class="pl-en">fetchWeather</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">lat</span> <span class="pl-c1">=</span> <span class="pl-c1">null</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span> <span class="pl-c1">=</span> <span class="pl-c1">null</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC61" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">    <span class="pl-en">fetch</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">)</span></div>
<div id="LC62" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">        <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">response</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">response</span><span class="pl-kos">.</span><span class="pl-en">json</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div>
<div id="LC63" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">        <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC64" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">cod</span> <span class="pl-c1">!==</span> <span class="pl-c1">200</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC65" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">                <span class="pl-en">displayError</span><span class="pl-kos">(</span><span class="pl-s">"City not found! Please enter a valid city name."</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC66" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">                <span class="pl-k">return</span><span class="pl-kos">;</span></div>
<div id="LC67" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">            <span class="pl-kos">}</span></div>
<div id="LC68" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">            <span class="pl-en">updateWeatherUI</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">,</span> <span class="pl-s1">lat</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC69" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">        <span class="pl-kos">}</span><span class="pl-kos">)</span></div>
<div id="LC70" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-59 ">        <span class="pl-kos">.</span><span class="pl-en">catch</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-en">displayError</span><span class="pl-kos">(</span><span class="pl-s">"Error fetching weather data. Please try again."</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC71" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span></div>
<div id="LC72" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC73" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-c">/* Update UI with weather data */</span></div>
<div id="LC74" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">function</span> <span class="pl-en">updateWeatherUI</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">,</span> <span class="pl-s1">lat</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC75" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 ">    <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">".weather-info"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s">`</span></div>
<div id="LC76" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;h2 id="location"&gt;<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">name</span><span class="pl-kos">}</span></span>, <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">sys</span><span class="pl-kos">.</span><span class="pl-c1">country</span><span class="pl-kos">}</span></span>&lt;/h2&gt;</span></div>
<div id="LC77" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;h1 class="temp"&gt;</span></div>
<div id="LC78" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;thermometer&lt;/span&gt; <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">temp</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span>°C</span></div>
<div id="LC79" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/h1&gt;</span></div>
<div id="LC80" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="description"&gt;<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">weather</span><span class="pl-kos">[</span><span class="pl-c1">0</span><span class="pl-kos">]</span><span class="pl-kos">.</span><span class="pl-c1">description</span><span class="pl-kos">}</span></span>&lt;/p&gt;</span></div>
<div id="LC81" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s"></span></div>
<div id="LC82" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="feels-like"&gt;</span></div>
<div id="LC83" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;thermometer&lt;/span&gt; Feels Like: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">feels_like</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span>°C</span></div>
<div id="LC84" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC85" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="temp-min"&gt;</span></div>
<div id="LC86" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;thermometer_add&lt;/span&gt; Min Temp: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">temp_min</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span>°C</span></div>
<div id="LC87" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC88" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="temp-max"&gt;</span></div>
<div id="LC89" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;thermometer_minus&lt;/span&gt; Max Temp: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">temp_max</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span>°C</span></div>
<div id="LC90" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC91" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s"></span></div>
<div id="LC92" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="humidity"&gt;</span></div>
<div id="LC93" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;humidity_mid&lt;/span&gt; Humidity: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">humidity</span><span class="pl-kos">}</span></span>%</span></div>
<div id="LC94" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC95" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="wind"&gt;</span></div>
<div id="LC96" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;air&lt;/span&gt; Wind Speed: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">wind</span><span class="pl-kos">.</span><span class="pl-c1">speed</span><span class="pl-kos">}</span></span> m/s</span></div>
<div id="LC97" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC98" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="sea-level"&gt;</span></div>
<div id="LC99" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;tsunami&lt;/span&gt; Sea Level: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">sea_level</span> ? <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">main</span><span class="pl-kos">.</span><span class="pl-c1">sea_level</span> <span class="pl-c1">+</span> <span class="pl-s">" hPa"</span> : <span class="pl-s">"N/A"</span><span class="pl-kos">}</span></span></span></div>
<div id="LC100" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC101" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="clouds"&gt;</span></div>
<div id="LC102" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;foggy&lt;/span&gt; Clouds: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">clouds</span><span class="pl-kos">.</span><span class="pl-c1">all</span><span class="pl-kos">}</span></span>%</span></div>
<div id="LC103" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC104" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s"></span></div>
<div id="LC105" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="sunrise"&gt;</span></div>
<div id="LC106" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;wb_sunny&lt;/span&gt; Sunrise: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-en">convertTimestamp</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">sys</span><span class="pl-kos">.</span><span class="pl-c1">sunrise</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span></span></div>
<div id="LC107" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC108" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;p class="sunset"&gt;</span></div>
<div id="LC109" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">            &lt;span class="material-symbols-outlined"&gt;wb_twilight&lt;/span&gt; Sunset: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-en">convertTimestamp</span><span class="pl-kos">(</span><span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">sys</span><span class="pl-kos">.</span><span class="pl-c1">sunset</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span></span></div>
<div id="LC110" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">        &lt;/p&gt;</span></div>
<div id="LC111" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 "><span class="pl-s">    `</span><span class="pl-kos">;</span></div>
<div id="LC112" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 ">
</div>
<div id="LC113" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 ">    <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"predict-temp-btn"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">display</span> <span class="pl-c1">=</span> <span class="pl-s">"block"</span><span class="pl-kos">;</span></div>
<div id="LC114" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 ">    <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"predict-temp-btn"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">setAttribute</span><span class="pl-kos">(</span><span class="pl-s">"data-lat"</span><span class="pl-kos">,</span> <span class="pl-s1">lat</span> <span class="pl-c1">||</span> <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">coord</span><span class="pl-kos">.</span><span class="pl-c1">lat</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC115" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-73 ">    <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"predict-temp-btn"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">setAttribute</span><span class="pl-kos">(</span><span class="pl-s">"data-lon"</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span> <span class="pl-c1">||</span> <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">coord</span><span class="pl-kos">.</span><span class="pl-c1">lon</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC116" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span></div>
<div id="LC117" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC118" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-c">/* Fetch temperature prediction from the backend */</span></div>
<div id="LC119" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">function</span> <span class="pl-en">fetchPrediction</span><span class="pl-kos">(</span><span class="pl-s1">city</span><span class="pl-kos">,</span> <span class="pl-s1">lat</span><span class="pl-kos">,</span> <span class="pl-s1">lon</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC120" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"prediction-results"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s">"Fetching predictions..."</span><span class="pl-kos">;</span></div></div>
<div class="react-no-virtualization-wrapper"><div id="LC121" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">
</div>
<div id="LC122" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-en">fetch</span><span class="pl-kos">(</span><span class="pl-s">"http://127.0.0.1:5000/predict"</span><span class="pl-kos">,</span> <span class="pl-kos">{</span></div>
<div id="LC123" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-c1">method</span>: <span class="pl-s">"POST"</span><span class="pl-kos">,</span></div>
<div id="LC124" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-c1">headers</span>: <span class="pl-kos">{</span> <span class="pl-s">"Content-Type"</span>: <span class="pl-s">"application/json"</span> <span class="pl-kos">}</span><span class="pl-kos">,</span></div>
<div id="LC125" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-c1">body</span>: <span class="pl-c1">JSON</span><span class="pl-kos">.</span><span class="pl-en">stringify</span><span class="pl-kos">(</span><span class="pl-kos">{</span> city<span class="pl-kos">,</span> lat<span class="pl-kos">,</span> lon <span class="pl-kos">}</span><span class="pl-kos">)</span>  <span class="pl-c">// Send either city OR lat/lon</span></div>
<div id="LC126" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-kos">}</span><span class="pl-kos">)</span></div>
<div id="LC127" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-s1">response</span> <span class="pl-c1">=&gt;</span> <span class="pl-s1">response</span><span class="pl-kos">.</span><span class="pl-en">json</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div>
<div id="LC128" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-kos">.</span><span class="pl-en">then</span><span class="pl-kos">(</span><span class="pl-s1">data</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC129" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-k">let</span> <span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-s">"&lt;h3&gt;Future Temperature Predictions:&lt;/h3&gt;"</span><span class="pl-kos">;</span></div>
<div id="LC130" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-s1">data</span><span class="pl-kos">.</span><span class="pl-c1">predictions</span><span class="pl-kos">.</span><span class="pl-en">forEach</span><span class="pl-kos">(</span><span class="pl-s1">pred</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC131" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">            <span class="pl-s1">output</span> <span class="pl-c1">+=</span> <span class="pl-s">`&lt;p&gt;<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">pred</span><span class="pl-kos">.</span><span class="pl-c1">date</span><span class="pl-kos">}</span></span>: <span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">pred</span><span class="pl-kos">.</span><span class="pl-c1">temp</span><span class="pl-kos">}</span></span>°C&lt;/p&gt;`</span><span class="pl-kos">;</span></div>
<div id="LC132" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC133" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"prediction-results"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s1">output</span><span class="pl-kos">;</span></div>
<div id="LC134" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-kos">}</span><span class="pl-kos">)</span></div>
<div id="LC135" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-kos">.</span><span class="pl-en">catch</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">{</span></div>
<div id="LC136" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">        <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">getElementById</span><span class="pl-kos">(</span><span class="pl-s">"prediction-results"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s">"Error fetching predictions."</span><span class="pl-kos">;</span></div>
<div id="LC137" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-118 ">    <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC138" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span></div>
<div id="LC139" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC140" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-c">/* Convert UNIX timestamp to readable time */</span></div>
<div id="LC141" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">function</span> <span class="pl-en">convertTimestamp</span><span class="pl-kos">(</span><span class="pl-s1">timestamp</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC142" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">const</span> <span class="pl-s1">date</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Date</span><span class="pl-kos">(</span><span class="pl-s1">timestamp</span> <span class="pl-c1">*</span> <span class="pl-c1">1000</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC143" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">    <span class="pl-k">return</span> <span class="pl-s1">date</span><span class="pl-kos">.</span><span class="pl-en">toLocaleTimeString</span><span class="pl-kos">(</span><span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">,</span> <span class="pl-kos">{</span> <span class="pl-c1">hour</span>: <span class="pl-s">"2-digit"</span><span class="pl-kos">,</span> <span class="pl-c1">minute</span>: <span class="pl-s">"2-digit"</span> <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div>
<div id="LC144" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span></div>
<div id="LC145" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div ">
</div>
<div id="LC146" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-c">/* Display an error message */</span></div>
<div id="LC147" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-k">function</span> <span class="pl-en">displayError</span><span class="pl-kos">(</span><span class="pl-s1">message</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div>
<div id="LC148" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-146 ">    <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">".weather-info"</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-c1">innerHTML</span> <span class="pl-c1">=</span> <span class="pl-s">`</span></div>
<div id="LC149" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-146 "><span class="pl-s">        &lt;h1 style="font-size: 6rem; margin-top:20px; text-align: center;"&gt;(&gt;_&lt;)&lt;/h1&gt;</span></div>
<div id="LC150" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-146 "><span class="pl-s">        &lt;p style="text-align: center;margin-top:5px; font-size: 2rem; color: white;"&gt;<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">message</span><span class="pl-kos">}</span></span>&lt;/p&gt;</span></div>
<div id="LC151" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div child-of-line-146 "><span class="pl-s">    `</span><span class="pl-kos">;</span></div>
<div id="LC152" class="react-code-text react-code-line-contents-no-virtualization react-file-line html-div "><span class="pl-kos">}</span></div></div></div><div class="Box-sc-g0xbh4-0 cpfgiu symbol-highlight react-code-text" data-testid="sticky-line-observer"></div><div class="Box-sc-g0xbh4-0 gWvaFN symbol-highlight react-code-text" data-testid="sticky-line-observer"></div><div class="Box-sc-g0xbh4-0 gZXUdB symbol-highlight react-code-text" data-testid="sticky-line-observer"></div><div class="Box-sc-g0xbh4-0 epssoH symbol-highlight react-code-text" data-testid="sticky-line-observer"></div></div><button hidden="" data-hotkey="Control+a"></button></div></div><div class="Box-sc-g0xbh4-0 fXFeWj"><div class="Box-sc-g0xbh4-0 gdqcZU"></div></div></div></div><div id="copilot-button-container"></div></div><div id="highlighted-line-menu-container"></div></div></div></section></div></div></div> <!-- --> <!-- --> </div></div></div></div></div></div></div><div id="find-result-marks-container" class="Box-sc-g0xbh4-0 cCoXib"></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+F6,Control+Shift+F6"></button><button hidden="" data-hotkey="Control+F6,Control+Shift+F6"></button></div> <!-- --> <!-- --> <script type="application/json" id="__PRIMER_DATA_:R0:__">{"resolvedServerColorMode":"day"}</script></div>
</react-app>




  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo" hidden="">
  <h2 class="sr-only">Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="GitHub Homepage" class="footer-octicon mr-2" href="https://github.com/">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>
</a>
      <span>
        © 2025 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link">Status</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link">Contact</a>
          </li>

          <li>
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;cookies&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;cookies_link_subfooter_footer&quot;}">
       Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li>
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent text-left" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;dont_share_info&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;dont_share_info_link_subfooter_footer&quot;}">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>



    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-locale="en" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false" data-catalyst=""></ghcc-consent>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>


    <style>
      .user-mention[href$="/Pranav211512"] {
        color: var(--color-user-mention-fg);
        background-color: var(--bgColor-attention-muted, var(--color-attention-subtle));
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
      }
      .user-mention[href$="/Pranav211512"]:before,
      .user-mention[href$="/Pranav211512"]:after {
        content: '';
        display: inline-block;
        width: 2px;
      }
    </style>


    </div>
    <div id="js-global-screen-reader-notice" class="sr-only mt-n1" aria-live="polite" aria-atomic="true">weatherNow/weather.js at main · Akhilesh100426/weatherNow</div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only mt-n1" aria-live="assertive" aria-atomic="true"></div>
  


<div class="sr-only mt-n1" id="screenReaderAnnouncementDiv" role="alert" data-testid="screenReaderAnnouncement" aria-live="assertive"></div></body></html>