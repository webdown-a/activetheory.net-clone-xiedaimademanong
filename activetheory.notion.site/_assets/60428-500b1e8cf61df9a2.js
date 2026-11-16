"use strict";(globalThis.rspackChunknotion_next||=[]).push([[60428],{556029(e,t,r){r(764657).literal("search"),r(764657).object({required:{actions:r(764657).array(r(764657).literal("search")),identifier:r(764657).string(),moduleType:r(764657).literal("github"),type:r(764657).literal("github")},optional:{},exact:!0});let i=r(764657).object({required:{actions:r(764657).array(r(764657).literal("search")),identifier:r(764657).string()},optional:{},exact:!0});r(764657).object({required:{},optional:{},exact:!0}),r(764657).object({required:{question:r(764657).string()},optional:{keywords:r(764657).string(),lookback:r(764657).string(),options:r(764657).object({required:{},optional:{fileType:r(764657).literals("code","issue","pull-request"),repo:r(764657).string()},exact:!0})},exact:!0}),r(764657).object({required:{results:r(764657).array(r(764657).object({required:{id:r(764657).string(),isPrivate:r(764657).boolean(),lastEdited:r(764657).string(),pageId:r(764657).string(),path:r(764657).string(),text:r(764657).string(),title:r(764657).string()},optional:{authorName:r(764657).string(),fileType:r(764657).string(),githubRepoName:r(764657).string(),statusTag:r(764657).string()},exact:!0}))},optional:{},exact:!0}),r(764657).object({required:{prNumber:r(764657).string(),repoName:r(764657).string()},optional:{},exact:!0}),r(764657).object({required:{blocks:r(764657).array(r(764657).string()),orgName:r(764657).string(),prNumber:r(764657).string(),repoName:r(764657).string(),timestamp:r(764657).number(),title:r(764657).string(),type:r(764657).literal("github")},optional:{statusTag:r(764657).string()},exact:!0}),r(764657).object({required:{issueNumber:r(764657).string(),repoName:r(764657).string()},optional:{},exact:!0}),r(764657).object({required:{blocks:r(764657).array(r(764657).string()),orgName:r(764657).string(),prNumber:r(764657).string(),repoName:r(764657).string(),timestamp:r(764657).number(),title:r(764657).string(),type:r(764657).literal("github")},optional:{statusTag:r(764657).string()},exact:!0}),r(764657).object({required:{commitSha:r(764657).string(),repoName:r(764657).string()},optional:{},exact:!0}),r(764657).object({required:{blocks:r(764657).array(r(764657).string()),orgName:r(764657).string(),prNumber:r(764657).string(),repoName:r(764657).string(),timestamp:r(764657).number(),title:r(764657).string(),type:r(764657).literal("github")},optional:{statusTag:r(764657).string()},exact:!0}),r(764657).object({required:{path:r(764657).string(),repoName:r(764657).string()},optional:{lineNumbers:r(764657).string(),ref:r(764657).string()},exact:!0}),r(764657).object({required:{codePath:r(764657).string(),content:r(764657).string(),orgName:r(764657).string(),repoName:r(764657).string(),type:r(764657).literal("githubCode"),url:r(764657).string()},optional:{branchName:r(764657).string(),lineNumbers:r(764657).string()},exact:!0}),r(764657).object({required:{query:r(764657).string()},optional:{},exact:!0}),r(764657).array(r(764657).object({required:{codePath:r(764657).string(),content:r(764657).string(),orgName:r(764657).string(),repoName:r(764657).string(),type:r(764657).literal("githubCode"),url:r(764657).string()},optional:{branchName:r(764657).string(),lineNumbers:r(764657).string()},exact:!0})),r(764657).object({required:{directory:r(764657).string()},optional:{repoName:r(764657).string()},exact:!0}),r(764657).array(r(764657).object({required:{codePath:r(764657).string(),content:r(764657).string(),orgName:r(764657).string(),repoName:r(764657).string(),type:r(764657).literal("githubCode"),url:r(764657).string()},optional:{branchName:r(764657).string(),lineNumbers:r(764657).string()},exact:!0})),r(764657).object({required:{userName:r(764657).string()},optional:{endDate:r(764657).string(),orgName:r(764657).string(),repoName:r(764657).string(),startDate:r(764657).string()},exact:!0});let a=r(764657).object({required:{blocks:r(764657).array(r(764657).string()),orgName:r(764657).string(),prNumber:r(764657).string(),repoName:r(764657).string(),timestamp:r(764657).number(),title:r(764657).string(),type:r(764657).literal("github")},optional:{user:r(764657).string()},exact:!0}),n=r(764657).array(r(764657).lazy(()=>a)),s=`
type GithubPersistedState = {}

/** @generateWorkflowType */
type GithubSearchInput = {
	question: string
	keywords?: string
	lookback?: string
	options?: {
		repo?: string
		fileType?: "code" | "issue" | "pull-request"
	}
}

/** @generateWorkflowType */
type GithubSearchResult = {
	results: Array<GithubSearchResultItem>
}

type GithubLoadPRInput = {
	repoName: string
	prNumber: string
}

type GithubLoadPRResult = LoadGithubResponse

type GithubLoadIssueInput = {
	repoName: string
	issueNumber: string
}

type GithubLoadIssueResult = LoadGithubResponse

type GithubLoadCommitInput = {
	repoName: string
	commitSha: string
}

type GithubLoadCommitResult = LoadGithubResponse

type GithubLoadFileInput = {
	repoName: string
	path: string
	ref?: string
	lineNumbers?: string
}

type GithubLoadFileResult = LoadGithubCodeResponse

type GithubGrepCodeInput = {
	query: string
}

type GithubGrepCodeResult = Array<LoadGithubCodeResponse>

type GithubLsDirectoryInput = {
	directory: string
	repoName?: string
}

type GithubLsDirectoryResult = Array<LoadGithubCodeResponse>

type GithubListPRsInput = {
	userName: string
	/** Bare repository name only. */
	repoName?: string
	/** Only set when the user explicitly included a GitHub org or owner. */
	orgName?: string
	startDate?: string
	endDate?: string
}

/**
 * @generateWorkflowType
 */
type GithubPullRequestListItem = {
	type: "github"
	blocks: string[]
	title: string
	orgName: string
	repoName: string
	prNumber: string
	timestamp: number
	user?: string
}

type GithubListPRsResult = Array<GithubPullRequestListItem>`,o=r(764657).object({required:{},optional:{},exact:!0}),l=r(764657).object({required:{question:r(764657).string()},optional:{keywords:r(764657).string(),lookback:r(764657).string(),options:r(764657).object({required:{},optional:{fileType:r(764657).literals("code","issue","pull-request"),repo:r(764657).string()},exact:!0})},exact:!0}),c=r(764657).object({required:{query:r(764657).string()},optional:{},exact:!0}),u=r(764657).object({required:{directory:r(764657).string()},optional:{repoName:r(764657).string()},exact:!0}),g=r(764657).object({required:{prNumber:r(764657).string(),repoName:r(764657).string()},optional:{},exact:!0}),h=r(764657).object({required:{issueNumber:r(764657).string(),repoName:r(764657).string()},optional:{},exact:!0}),p=r(764657).object({required:{commitSha:r(764657).string(),repoName:r(764657).string()},optional:{},exact:!0}),d=r(764657).object({required:{path:r(764657).string(),repoName:r(764657).string()},optional:{lineNumbers:r(764657).string(),ref:r(764657).string()},exact:!0}),b=r(764657).object({required:{userName:r(764657).string()},optional:{endDate:r(764657).string(),orgName:r(764657).string(),repoName:r(764657).string(),startDate:r(764657).string()},exact:!0}),m=r(764657).object({required:{userName:r(764657).string()},optional:{endDate:r(764657).string(),orgName:r(764657).string(),repoName:r(764657).string(),startDate:r(764657).string()},exact:!0});r.d(t,{},{IR:i,fM:{dataTypes:s,dataTypesArray:["GithubPersistedState","GithubSearchInput","GithubSearchResult","GithubLoadPRInput","GithubLoadPRResult","GithubLoadIssueInput","GithubLoadIssueResult","GithubLoadCommitInput","GithubLoadCommitResult","GithubLoadFileInput","GithubLoadFileResult","GithubGrepCodeInput","GithubGrepCodeResult","GithubLsDirectoryInput","GithubLsDirectoryResult","GithubListPRsInput","GithubPullRequestListItem","GithubListPRsResult"],persistedStateValidator:o,persistedState:"",triggers:{},effects:{"github.search":"search(args: GithubSearchInput): Promise<GithubSearchResult>","github.grepCode":"grepCode(args: GithubGrepCodeInput): Promise<GithubGrepCodeResult>","github.lsDirectory":"lsDirectory(args: GithubLsDirectoryInput): Promise<GithubLsDirectoryResult>","github.loadPR":"loadPR(args: GithubLoadPRInput): Promise<GithubLoadPRResult>","github.loadIssue":"loadIssue(args: GithubLoadIssueInput): Promise<GithubLoadIssueResult>","github.loadCommit":"loadCommit(args: GithubLoadCommitInput): Promise<GithubLoadCommitResult>","github.loadFile":"loadFile(args: GithubLoadFileInput): Promise<GithubLoadFileResult>","github.listPRsAuthored":"listPRsAuthored(args: GithubListPRsInput): Promise<GithubListPRsResult>","github.listPRsToReview":"listPRsToReview(args: GithubListPRsInput): Promise<GithubListPRsResult>"},effectsArray:["github.search","github.grepCode","github.lsDirectory","github.loadPR","github.loadIssue","github.loadCommit","github.loadFile","github.listPRsAuthored","github.listPRsToReview"],effectsValidators:{"github.search":l,"github.grepCode":c,"github.lsDirectory":u,"github.loadPR":g,"github.loadIssue":h,"github.loadCommit":p,"github.loadFile":d,"github.listPRsAuthored":b,"github.listPRsToReview":m}},mf:n})},166919(e,t,r){r(764657).object({required:{},optional:{},exact:!0});let i=r(764657).object({required:{results:r(764657).array(r(764657).object({required:{id:r(764657).string(),lastEdited:r(764657).string(),path:r(764657).string(),snippet:r(764657).string(),title:r(764657).string(),type:r(764657).literals("asana","block","box","confluence","github","gmail","google-calendar","google-drive","helpdoc","helpdoc-section","jira","linear","microsoft-teams","notion-calendar","notion-mail","outlook","page","properties","salesforce","sharepoint","slack","thread","webpage")},optional:{archived:r(764657).boolean(),badges:r(764657).array(r(764657).object({required:{label:r(764657).string(),type:r(764657).literals("agent","ai_skill","archived","current_page","is_collection","is_template","memories","most_viewed","popular_this_week","verified","verified_expired")},optional:{},exact:!0})),isPrivate:r(764657).boolean(),messages:r(764657).array(r(764657).object({required:{lastEdited:r(764657).string(),messageId:r(764657).string(),text:r(764657).string()},optional:{threadId:r(764657).string(),user:r(764657).string()},exact:!0})),pageId:r(764657).string(),properties:r(764657).string(),url:r(764657).string()},exact:!0}))},optional:{searchTargetStatuses:r(764657).array(r(764657).object({required:{status:r(764657).literals("error","timeout"),target:r(764657).literals("asana","box","confluence","github","gmail","google-calendar","google-drive","helpdocs","jira","linear","microsoft-teams","notion","notion-calendar","notion-mail","outlook","salesforce","sharepoint","slack","web")},optional:{},exact:!0})),systemMessages:r(764657).array(r(764657).string())},exact:!0});r(764657).object({required:{question:r(764657).string()},optional:{keywords:r(764657).string(),lookback:r(764657).string()},exact:!0}),r(764657).object({required:{query:r(764657).string()},optional:{},exact:!0}),r(764657).object({required:{keywords:r(764657).string(),question:r(764657).string()},optional:{lookback:r(764657).string()},exact:!0});let a=r(764657).literals("asana","box","confluence","github","gmail","google-calendar","google-drive","helpdocs","jira","linear","memory","microsoft-teams","notion","notion-calendar","notion-mail","outlook","salesforce","sharepoint","slack","web"),n=r(764657).literals("asana","block","box","confluence","github","gmail","google-calendar","google-drive","helpdoc","helpdoc-section","jira","linear","memory","microsoft-teams","notion-calendar","notion-mail","outlook","page","properties","salesforce","sharepoint","slack","thread","webpage"),s=r(764657).object({required:{results:r(764657).array(r(764657).lazy(()=>b))},optional:{searchTargetStatuses:r(764657).array(r(764657).object({required:{status:r(764657).literals("error","timeout"),target:r(764657).lazy(()=>a)},optional:{},exact:!0})),searchedSources:r(764657).array(r(764657).literals("asana","box","confluence","github","gmail","google-calendar","google-drive","helpdocs","jira","linear","memory","microsoft-teams","notion","notion-calendar","notion-mail","outlook","salesforce","sharepoint","slack","web")),warnings:r(764657).array(r(764657).string())},exact:!0}),o=r(764657).object({required:{results:r(764657).array(r(764657).lazy(()=>l))},optional:{routeStatus:r(764657).lazy(()=>u),searchTargetStatuses:r(764657).array(r(764657).lazy(()=>c)),searchedSources:r(764657).array(r(764657).string())},exact:!0}),l=r(764657).object({required:{id:r(764657).string(),snippet:r(764657).string(),source:r(764657).string(),title:r(764657).string()},optional:{lastEdited:r(764657).string(),toolName:r(764657).string(),url:r(764657).string()},exact:!0}),c=r(764657).object({required:{source:r(764657).string(),status:r(764657).literals("error","needs_reauth","no_search_tool","timeout","tool_selection_failed")},optional:{httpStatus:r(764657).number()},exact:!0}),u=r(764657).literals("no_connections","routed","router_selected_none","router_unavailable"),g=r(764657).object({required:{collectionId:r(764657).string(),title:r(764657).string(),type:r(764657).literal("database")},optional:{},exact:!0}),h=r(764657).object({required:{pageId:r(764657).string(),title:r(764657).string(),type:r(764657).literal("page")},optional:{},exact:!0}),p=r(764657).union([r(764657).lazy(()=>g),r(764657).lazy(()=>h)]),d=r(764657).union([r(764657).lazy(()=>N),r(764657).string()]),b=r(764657).object({required:{id:r(764657).string(),snippet:r(764657).string(),title:r(764657).string(),type:r(764657).lazy(()=>n)},optional:{highlight:r(764657).lazy(()=>x),lastEdited:r(764657).string(),metadata:r(764657).union([r(764657).object({required:{source:r(764657).literals("google-calendar","notion-calendar")},optional:{attendeeCount:r(764657).number(),isRecurring:r(764657).boolean(),location:r(764657).string()},exact:!0}),r(764657).object({required:{source:r(764657).literal("github")},optional:{authorName:r(764657).string(),fileType:r(764657).string(),repoName:r(764657).string(),statusTag:r(764657).string()},exact:!0}),r(764657).object({required:{source:r(764657).literals("gmail","notion-mail"),threadId:r(764657).string()},optional:{},exact:!0}),r(764657).object({required:{blockType:r(764657).string(),source:r(764657).literal("notion")},optional:{archived:r(764657).boolean(),badges:r(764657).array(r(764657).object({required:{label:r(764657).string(),type:r(764657).literals("agent","ai_skill","archived","current_page","is_collection","is_template","memories","most_viewed","popular_this_week","verified","verified_expired")},optional:{},exact:!0})),createdTime:r(764657).string(),icon:r(764657).string()},exact:!0}),r(764657).object({required:{source:r(764657).literal("slack")},optional:{authorName:r(764657).string(),channelId:r(764657).string(),teamId:r(764657).string(),threadTs:r(764657).string()},exact:!0}),r(764657).object({required:{source:r(764657).literal("thread"),spanIndex:r(764657).number(),threadId:r(764657).string()},optional:{authors:r(764657).array(r(764657).string()),createdTime:r(764657).string()},exact:!0}),r(764657).object({required:{score:r(764657).number(),source:r(764657).literal("web")},optional:{favicon:r(764657).string()},exact:!0})]),path:r(764657).lazy(()=>d),url:r(764657).string()},exact:!0});r(764657).object({required:{query:r(764657).string()},optional:{filters:r(764657).lazy(()=>m),limit:r(764657).number(),sort:r(764657).literals("created","lastEdited","relevance")},exact:!0});let m=r(764657).object({required:{},optional:{contentStatus:r(764657).lazy(()=>f),createdBy:r(764657).array(r(764657).string()),createdTime:r(764657).lazy(()=>y),editedBy:r(764657).array(r(764657).string()),inPage:r(764657).string(),lastEditedTime:r(764657).lazy(()=>y),teamspaces:r(764657).array(r(764657).string()),titleOnly:r(764657).boolean()},exact:!0}),y=r(764657).object({required:{},optional:{onOrAfter:r(764657).string(),onOrBefore:r(764657).string()},exact:!0}),f=r(764657).literals("all_with_archived","all_without_archived","archived_only","verified_only"),S=r(764657).object({required:{text:r(764657).string()},optional:{blockId:r(764657).string()},exact:!0}),x=r(764657).object({required:{},optional:{blocks:r(764657).array(r(764657).lazy(()=>S)),collectionText:r(764657).string(),pathText:r(764657).string(),text:r(764657).string(),title:r(764657).string(),uniqueId:r(764657).string()},exact:!0}),R=r(764657).object({required:{id:r(764657).string(),title:r(764657).string()},optional:{archived:r(764657).boolean(),createdTime:r(764657).string(),highlight:r(764657).lazy(()=>x),lastEdited:r(764657).string(),path:r(764657).lazy(()=>d),resourceType:r(764657).literals("database","folder","page"),url:r(764657).string()},exact:!0}),q=r(764657).object({required:{results:r(764657).array(r(764657).lazy(()=>R))},optional:{warnings:r(764657).array(r(764657).string())},exact:!0}),N=r(764657).array(r(764657).lazy(()=>p)),j=`
type SearchPersistedState = {}

type SearchEffectResult = {
	results: Array<SearchResult>
	systemMessages?: Array<string>
	searchTargetStatuses?: Array<{
		target: UniversalSearchTarget
		status: "timeout" | "error"
	}>
}

type UnifiedSearchInput = {
	question: string
	/** Core search terms. Defaults to question when omitted or blank. */
	keywords?: string
	lookback?: string
}

type AttachmentSearchInput = {
	/** A natural-language query about the contents of files uploaded to Notion. */
	query: string
}

type McpSearchInput = {
	question: string
	keywords: string
	lookback?: string
}

type UnifiedSearchTarget = "asana" | "box" | "confluence" | "github" | "gmail" | "google-calendar" | "google-drive" | "helpdocs" | "jira" | "linear" | "memory" | "microsoft-teams" | "notion" | "notion-calendar" | "notion-mail" | "outlook" | "salesforce" | "sharepoint" | "slack" | "web"

type UnifiedSearchResultType = "asana" | "block" | "box" | "confluence" | "github" | "gmail" | "google-calendar" | "google-drive" | "helpdoc" | "helpdoc-section" | "jira" | "linear" | "memory" | "microsoft-teams" | "notion-calendar" | "notion-mail" | "outlook" | "page" | "properties" | "salesforce" | "sharepoint" | "slack" | "thread" | "webpage"

type UnifiedSearchResult = {
	results: Array<UnifiedSearchResultItem>
	/** Warnings about input fallbacks or ignored options. */
	warnings?: string[]
	searchTargetStatuses?: Array<{
		target: UnifiedSearchTarget
		status: "timeout" | "error"
	}>
	/** Search targets actually queried for this call, excluding not-connected searchers. */
	searchedSources?: Array<UnifiedSearchTarget>
}

type McpSearchResult = {
	results: Array<McpSearchResultItem>
	searchTargetStatuses?: Array<McpSearchTargetStatus>
	searchedSources?: Array<string>
	routeStatus?: McpSearchRouteStatus
}

type McpSearchResultItem = {
	id: string
	source: string
	toolName?: string
	title: string
	snippet: string
	url?: string
	lastEdited?: string
}

type McpSearchTargetStatus = {
	source: string
	status: "timeout" | "error" | "no_search_tool" | "tool_selection_failed" | "needs_reauth"
	/** HTTP status returned by the MCP server. */
	httpStatus?: number
}

type McpSearchRouteStatus = "routed" | "router_unavailable" | "no_connections" | "router_selected_none"

type NotionSearchResultDatabasePathSegment = {
	type: "database"
	collectionId: string
	title: string
}

type NotionSearchResultPagePathSegment = {
	type: "page"
	pageId: string
	title: string
}

type NotionSearchResultPathSegment =
	| NotionSearchResultDatabasePathSegment
	| NotionSearchResultPagePathSegment

type SearchHitPath = string | NotionSearchResultPath

type UnifiedSearchResultItem = {
	highlight?: NotionSearchResultHighlight
	id: string
	type: UnifiedSearchResultType
	title: string
	snippet: string
	url?: string
	path?: SearchHitPath
	lastEdited?: string
	metadata?: SearchHitMetadata
}

type NotionSearchInput = {
	/** Passed verbatim to the Notion search API. */
	query: string
	filters?: NotionSearchInputFilters
	/** Result ordering. Defaults to "relevance". */
	sort?: "relevance" | "lastEdited" | "created"
	limit?: number
}

/**
 * Agent-facing filters for the notion-search tool: the user-facing search
 * modal filters (minus admin/dev-only fields), so the tool stays coupled to
 * the search API. The effect narrows these raw LLM strings (e.g. user URLs or
 * IDs) into \`SearchFilters\` values before calling the search API.
 */
type NotionSearchInputFilters = {
	/** Notion user URLs or user IDs. */
	createdBy?: Array<string>
	/** Notion user URLs or user IDs. */
	editedBy?: Array<string>
	createdTime?: NotionSearchDateRange
	lastEditedTime?: NotionSearchDateRange
	/** Teamspace URLs or teamspace IDs. */
	teamspaces?: Array<string>
	/** A Notion page URL or page ID, mapped to \`SearchFilters.ancestors\`. */
	inPage?: string
	/** Match only against page titles instead of page content. */
	titleOnly?: boolean
	contentStatus?: NotionSearchContentStatusFilter
}

type NotionSearchDateRange = {
	/** Inclusive lower bound, formatted as "YYYY-MM-DD". */
	onOrAfter?: string
	/** Inclusive upper bound, formatted as "YYYY-MM-DD". */
	onOrBefore?: string
}

type NotionSearchContentStatusFilter =
	| "all_with_archived"
	| "all_without_archived"
	| "verified_only"
	| "archived_only"

type NotionSearchHighlightBlock = {
	/** Matching content block ID, when known. Pass to load_block_id when that tool is available. */
	blockId?: string
	/** Matching excerpt; it may be truncated and is not full-page context. */
	text: string
}

type NotionSearchResultHighlight = {
	/** Matching excerpts in relevance order. The result id still identifies the page. */
	blocks?: Array<NotionSearchHighlightBlock>
	/** Legacy combined excerpt, accepted for previously stored search results. */
	text?: string
	pathText?: string
	title?: string
	collectionText?: string
	uniqueId?: string
}

/**
 * A single notion-search tool hit, persisted on the result step so the tool's
 * LLM-facing text can be re-rendered without re-running the search.
 */
type NotionSearchApiRenderEntry = {
	id: string
	title: string
	/** The Notion resource type, used to select the correct follow-up tool. */
	resourceType?: "page" | "database" | "folder"
	/** Highlighted excerpts, straight from the search API result. */
	highlight?: NotionSearchResultHighlight
	url?: string
	path?: SearchHitPath
	createdTime?: string
	lastEdited?: string
	archived?: boolean
}

type NotionSearchEffectResult = {
	warnings?: string[]
	results: Array<NotionSearchApiRenderEntry>
}

type NotionSearchResultPath = Array<NotionSearchResultPathSegment>`,I=r(764657).object({required:{},optional:{},exact:!0}),P=r(764657).object({required:{question:r(764657).string()},optional:{keywords:r(764657).string(),lookback:r(764657).string()},exact:!0}),w=r(764657).object({required:{query:r(764657).string()},optional:{filters:r(764657).lazy(()=>m),limit:r(764657).number(),sort:r(764657).literals("created","lastEdited","relevance")},exact:!0}),_=r(764657).object({required:{query:r(764657).string()},optional:{},exact:!0}),k=r(764657).object({required:{keywords:r(764657).string(),question:r(764657).string()},optional:{lookback:r(764657).string()},exact:!0});r.d(t,{},{B_:i,O:o,Y0:s,_:{dataTypes:j,dataTypesArray:["SearchPersistedState","SearchEffectResult","UnifiedSearchInput","AttachmentSearchInput","McpSearchInput","UnifiedSearchTarget","UnifiedSearchResultType","UnifiedSearchResult","McpSearchResult","McpSearchResultItem","McpSearchTargetStatus","McpSearchRouteStatus","NotionSearchResultDatabasePathSegment","NotionSearchResultPagePathSegment","NotionSearchResultPathSegment","SearchHitPath","UnifiedSearchResultItem","NotionSearchInput","NotionSearchInputFilters","NotionSearchDateRange","NotionSearchContentStatusFilter","NotionSearchHighlightBlock","NotionSearchResultHighlight","NotionSearchApiRenderEntry","NotionSearchEffectResult","NotionSearchResultPath"],persistedStateValidator:I,persistedState:"",triggers:{},effects:{"search.unifiedSearch":"(args: UnifiedSearchInput) => Promise<UnifiedSearchResult>","search.notionSearch":"(args: NotionSearchInput) => Promise<NotionSearchEffectResult>","search.attachmentSearch":"(args: AttachmentSearchInput) => Promise<UnifiedSearchResult>","search.mcpSearch":"(args: McpSearchInput) => Promise<McpSearchResult>"},effectsArray:["search.unifiedSearch","search.notionSearch","search.attachmentSearch","search.mcpSearch"],effectsValidators:{"search.unifiedSearch":P,"search.notionSearch":w,"search.attachmentSearch":_,"search.mcpSearch":k}},o2:q})},454889(e,t,r){r(764657).object({required:{},optional:{},exact:!0}),r(764657).object({required:{queries:r(764657).array(r(764657).string())},optional:{category:r(764657).literals("company","financial report","github","linkedin profile","news","pdf","people","personal site","research paper","tweet"),excludeDomains:r(764657).array(r(764657).string()),excludeText:r(764657).array(r(764657).string()),includeDomains:r(764657).array(r(764657).string()),includeText:r(764657).array(r(764657).string()),maxCharactersPerResult:r(764657).number(),maxResults:r(764657).number(),objective:r(764657).string()},exact:!0});let i=r(764657).object({required:{results:r(764657).array(r(764657).object({required:{text:r(764657).string(),title:r(764657).string(),url:r(764657).string()},optional:{favicon:r(764657).string(),lastEdited:r(764657).string(),score:r(764657).number()},exact:!0}))},optional:{resultMetadata:r(764657).object({required:{maxCharactersPerResult:r(764657).number(),resultLimit:r(764657).number(),returnedCount:r(764657).number()},optional:{},exact:!0}),warnings:r(764657).array(r(764657).string())},exact:!0});r(764657).object({required:{url:r(764657).string()},optional:{fast_mode:r(764657).boolean(),include_full_content:r(764657).boolean(),line_start:r(764657).number(),queries:r(764657).array(r(764657).string())},exact:!0}),r(764657).object({required:{endLine:r(764657).number(),includedLineCount:r(764657).number(),isTruncated:r(764657).boolean(),score:r(764657).number(),startLine:r(764657).number(),title:r(764657).nullable(r(764657).string()),totalLineCount:r(764657).number(),url:r(764657).string()},optional:{highlights:r(764657).array(r(764657).string()),publishedDate:r(764657).nullable(r(764657).string()),summary:r(764657).string(),text:r(764657).string()},exact:!0}),r(764657).object({required:{entity_type:r(764657).literals("companies","people"),objective:r(764657).string()},optional:{match_limit:r(764657).number()},exact:!0}),r(764657).object({required:{results:r(764657).array(r(764657).object({required:{description:r(764657).string(),name:r(764657).string(),url:r(764657).string()},optional:{},exact:!0}))},optional:{},exact:!0}),r(764657).object({required:{entity_name:r(764657).string(),objective:r(764657).string()},optional:{entity_url:r(764657).string(),output_schema:r(764657).lazy(()=>a)},exact:!0});let a=r(764657).object({required:{type:r(764657).literals("array","boolean","integer","number","object","string")},optional:{description:r(764657).string(),items:r(764657).lazy(()=>a),properties:r(764657).record(r(764657).string(),r(764657).lazy(()=>a)),required:r(764657).array(r(764657).string())},exact:!0});r(764657).union([r(764657).isNull(),r(764657).literal(!1),r(764657).literal(!0),r(764657).number(),r(764657).string()]);let n=r(764657).record(r(764657).string(),r(764657).lazy(()=>s)),s=r(764657).union([r(764657).array(r(764657).lazy(()=>s)),r(764657).isNull(),r(764657).lazy(()=>n),r(764657).literal(!1),r(764657).literal(!0),r(764657).number(),r(764657).string()]);r(764657).object({required:{query:r(764657).string()},optional:{output_schema:r(764657).lazy(()=>a)},exact:!0});let o=r(764657).object({required:{answer:r(764657).lazy(()=>s),citations:r(764657).array(r(764657).object({required:{text:r(764657).string(),title:r(764657).string(),url:r(764657).string()},optional:{favicon:r(764657).string(),lastEdited:r(764657).string(),score:r(764657).number()},exact:!0}))},optional:{},exact:!0}),l=r(764657).object({required:{},optional:{confidence:r(764657).literals("high","low","medium"),text:r(764657).string(),title:r(764657).string(),url:r(764657).string()},exact:!0}),c=r(764657).object({required:{citations:r(764657).array(r(764657).lazy(()=>l)),content:r(764657).lazy(()=>s)},optional:{},exact:!0}),u=`
type WebPersistedState = {}

type WebSearchInput = {
	queries: string[]
	// Optional search goal in a concise, self-contained sentence naming the key entity or topic.
	objective?: string
	category?: ExaCategory
	includeDomains?: string[]
	excludeDomains?: string[]
	includeText?: string[]
	excludeText?: string[]
	// Maximum total results returned when bounded web search is enabled.
	maxResults?: number
	// Maximum characters returned in each result excerpt when bounded web
	// search is enabled.
	maxCharactersPerResult?: number
}

type WebSearchOutput = {
	results: WebSearchResult[]
	// Search limitations or options ignored when repairing agent input.
	warnings?: string[]
	resultMetadata?: {
		returnedCount: number
		resultLimit: number
		maxCharactersPerResult: number
	}
}

type WebLoadPageInput = {
	url: string
	// When true (default), uses fast extraction. When false, uses comprehensive extraction (slow, can take up to two minutes). Always use fast_mode first and only set to false if fast mode returned insufficient or stale content.
	fast_mode?: boolean
	// When true (default), returns the full page content. When false, returns only query-targeted snippets/highlights. Requires queries when false.
	include_full_content?: boolean
	// Search queries to focus snippet extraction when include_full_content is false. Required when include_full_content is false.
	queries?: string[]
	// 1-based line number to start returning content from (defaults to 1).
	line_start?: number
}

type WebLoadPageResult = WebPage

type WebEntitySearchInput = {
	// Whether to find people or companies.
	entity_type: "people" | "companies"
	// Natural-language description of which entities to find. Be specific about
	// criteria (industry, funding stage, location, role, etc.).
	objective: string
	// Maximum number of matched entities to return (5-1000). Defaults to 100.
	match_limit?: number
}

type WebEntitySearchOutput = {
	results: Array<WebEntitySearchResult>
}

type WebEnrichmentInput = {
	// Name of the entity to enrich.
	entity_name: string
	// Optional canonical URL for the entity. Use this when a row already contains a reliable website or profile URL.
	entity_url?: string
	// The specific information to find and return about the entity.
	objective: string
	// Optional structured output schema. Use this when the database column expects a particular JSON shape.
	output_schema?: WebEnrichmentOutputSchema
}

type WebEnrichmentOutputSchema = {
	type: "array" | "boolean" | "integer" | "number" | "object" | "string"
	description?: string
	properties?: Record<string, WebEnrichmentOutputSchema>
	items?: WebEnrichmentOutputSchema
	required?: string[]
}

type WebEnrichmentJsonPrimitive = string | number | boolean | null

type WebEnrichmentJsonObject = {
	[key: string]: WebEnrichmentJsonValue
}

type WebEnrichmentJsonValue =
	| WebEnrichmentJsonPrimitive
	| WebEnrichmentJsonObject
	| WebEnrichmentJsonValue[]

type WebResearchInput = {
	// The complete, self-contained question to research, including every constraint (dates, units, qualifiers).
	query: string
	// Optional structured output schema for answer. Omit this for a plain text answer.
	output_schema?: WebEnrichmentOutputSchema
}

type WebResearchOutput = {
	answer: WebEnrichmentJsonValue
	citations: WebSearchResult[]
}

type WebEnrichmentCitation = {
	url?: string
	title?: string
	confidence?: "low" | "medium" | "high"
	// Supporting excerpt from the source (Exa highlights), mirroring the \`text\`
	// field on web.search results.
	text?: string
}

type WebEnrichmentOutput = {
	content: WebEnrichmentJsonValue
	citations: WebEnrichmentCitation[]
}`,g=r(764657).object({required:{},optional:{},exact:!0}),h=r(764657).object({required:{queries:r(764657).array(r(764657).string())},optional:{category:r(764657).literals("company","financial report","github","linkedin profile","news","pdf","people","personal site","research paper","tweet"),excludeDomains:r(764657).array(r(764657).string()),excludeText:r(764657).array(r(764657).string()),includeDomains:r(764657).array(r(764657).string()),includeText:r(764657).array(r(764657).string()),maxCharactersPerResult:r(764657).number(),maxResults:r(764657).number(),objective:r(764657).string()},exact:!0}),p=r(764657).object({required:{url:r(764657).string()},optional:{fast_mode:r(764657).boolean(),include_full_content:r(764657).boolean(),line_start:r(764657).number(),queries:r(764657).array(r(764657).string())},exact:!0}),d=r(764657).object({required:{entity_type:r(764657).literals("companies","people"),objective:r(764657).string()},optional:{match_limit:r(764657).number()},exact:!0}),b=r(764657).object({required:{query:r(764657).string()},optional:{output_schema:r(764657).lazy(()=>a)},exact:!0}),m=r(764657).object({required:{entity_name:r(764657).string(),objective:r(764657).string()},optional:{entity_url:r(764657).string(),output_schema:r(764657).lazy(()=>a)},exact:!0});r.d(t,{},{Bm:c,U:i,ZW:o,qQ:{dataTypes:u,dataTypesArray:["WebPersistedState","WebSearchInput","WebSearchOutput","WebLoadPageInput","WebLoadPageResult","WebEntitySearchInput","WebEntitySearchOutput","WebEnrichmentInput","WebEnrichmentOutputSchema","WebEnrichmentJsonPrimitive","WebEnrichmentJsonObject","WebEnrichmentJsonValue","WebResearchInput","WebResearchOutput","WebEnrichmentCitation","WebEnrichmentOutput"],persistedStateValidator:g,persistedState:"",triggers:{},effects:{"web.search":"(args: WebSearchInput) => Promise<WebSearchOutput>","web.loadPage":"(args: WebLoadPageInput) => Promise<WebLoadPageResult>","web.entitySearch":"(args: WebEntitySearchInput) => Promise<WebEntitySearchOutput>","web.research":"(args: WebResearchInput) => Promise<WebResearchOutput>","web.enrichment":"(args: WebEnrichmentInput) => Promise<WebEnrichmentOutput>"},effectsArray:["web.search","web.loadPage","web.entitySearch","web.research","web.enrichment"],effectsValidators:{"web.search":h,"web.loadPage":p,"web.entitySearch":d,"web.research":b,"web.enrichment":m}}})}}]);