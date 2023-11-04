import { CancelRule } from "../../../types/rules";
import { ExtensionRule, ExtensionRuleAction, RuleActionType } from "../types";
import { parseConditionFromSource } from "./utils";

const parseCancelRule = (rule: CancelRule): ExtensionRule[] => {
  return rule.pairs.map(
    (rulePair): ExtensionRule => {
      const condition = parseConditionFromSource(rulePair.source);
      const action: ExtensionRuleAction = {
        type: RuleActionType.BLOCK,
      };

      return { action, condition };
    }
  );
};

export default parseCancelRule;
