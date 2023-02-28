import 'package:chalobazar_multivendor/data/model/response/language_model.dart';
import 'package:chalobazar_multivendor/util/app_constants.dart';
import 'package:flutter/material.dart';

class LanguageRepo {
  List<LanguageModel> getAllLanguages({BuildContext context}) {
    return AppConstants.languages;
  }
}
